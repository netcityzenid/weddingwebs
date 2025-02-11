import connectToDatabase from "../../utils/mongodb";
import FormData from "../../models/FormData";

export async function POST(request: Request) {
  await connectToDatabase();

  const { name, comment, attendance } = await request.json();

  const newData = new FormData({
    name,
    comment,
    attendance,
  });

  await newData.save();

  return new Response(JSON.stringify(newData), { status: 201 });
}

export async function GET() {
  await connectToDatabase();

  const data = await FormData.find().sort({ createdAt: -1 });

  return new Response(JSON.stringify(data), { status: 200 });
}
