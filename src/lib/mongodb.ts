import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error("MONGODB_URI 환경 변수가 설정되지 않았습니다.");
}

// 개발 중 핫리로드로 연결이 계속 늘어나지 않도록 전역에 캐시한다.
const globalForMongo = globalThis as unknown as { _mongoClient?: Promise<MongoClient> };

const clientPromise = (globalForMongo._mongoClient ??= new MongoClient(uri).connect());

export default clientPromise;

export async function getClicksCollection() {
  const client = await clientPromise;
  return client.db("linknamu").collection<{ _id: string; count: number }>("clicks");
}
