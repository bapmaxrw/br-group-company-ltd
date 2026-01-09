import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Product from "@/models/Product";

export async function GET(req: Request) {
    try {
        await dbConnect();

        const { searchParams } = new URL(req.url);
        const category = searchParams.get("category");
        const query = searchParams.get("query");

        let filter: any = {};
        if (category) filter.category = category;
        if (query) filter.name = { $regex: query, $options: "i" };

        const products = await Product.find(filter).populate("supplier", "name company");

        return NextResponse.json(products);
    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}

import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]/route";

export async function POST(req: Request) {
    try {
        const session = await getServerSession(authOptions as any) as any;

        if (!session || session.user?.role !== 'supplier') {
            return NextResponse.json({ message: "Unauthorized. Supplier access required." }, { status: 401 });
        }

        await dbConnect();
        const data = await req.json();

        // Assign supplier from session for security
        data.supplier = (session.user as any).id;

        const product = await Product.create(data);

        return NextResponse.json(product, { status: 201 });
    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}
