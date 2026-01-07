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

export async function POST(req: Request) {
    try {
        await dbConnect();
        const data = await req.json();

        // In a real app, we'd get the supplier ID from the session
        // For now, we take it from the body but this should be secured

        const product = await Product.create(data);

        return NextResponse.json(product, { status: 201 });
    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}
