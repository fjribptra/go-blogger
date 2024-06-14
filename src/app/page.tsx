import Image from "next/image";
import * as React from 'react';
import Button from '@mui/material/Button';
import connection from "@/lib/db_connection";

connection()

export default function Home() {
  return (
    <main>
      <div>
        <h1>Go Blogger</h1>
      </div>
    </main>
  );
}
