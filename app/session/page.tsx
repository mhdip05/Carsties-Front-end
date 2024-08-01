import React from "react";
import Heading from "../components/Heading";
import { getSession, getTokenWorkAround } from "../actions/authActions";
import AuthTest from "./AuthTest";

export default async function Session() {
  const session = await getSession();
  const token = await getTokenWorkAround();

  return (
    <div>
      <Heading title="Session Dashboard" />
      <div className="bg-blue-200 border-2 border-blue-500">
        <h3 className="text-lg">Session data</h3>
        <pre>{JSON.stringify(session, null, 2)}</pre>
      </div>
      <div className="mt-4 mb-4">
        <AuthTest />
      </div>
      <div className="bg-green-200 border-2 border-blue-500 overflow-auto">
        <h3 className="text-lg">Token Data</h3>
        <pre>{JSON.stringify(token, null, 2)}</pre>
      </div>
    </div>
  );
}
