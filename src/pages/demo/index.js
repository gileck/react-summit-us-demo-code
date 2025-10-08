'use client';

import { lazy } from "react";
import { SuspenseWrapper } from "./SuspenseWrapper";

const ProfileCard = lazy(() => import("./ProfileCard.jsx"));

export default function App() {
  return (
    <div>
        <div style={{ height: 1200 }}>Top of the page</div>
        <SuspenseWrapper>
            <ProfileCard />
        </SuspenseWrapper>
    </div>
  );
}



