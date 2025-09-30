'use client';

import { lazy } from "react";
import { SuspenseOnVisible } from "./SuspenseOnVisible";

const ProfileCard = lazy(() => import("./ProfileCard.jsx"));

export default function App() {
  return (
    <div>
        <div style={{ height: 1200 }}>Top of the page</div>
        <SuspenseOnVisible>
            <ProfileCard />
        </SuspenseOnVisible>
    </div>
  );
}



