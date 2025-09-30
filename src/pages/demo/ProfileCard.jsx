import { useEffect } from "react";
export default function ProfileCard() {
    useEffect(() => {
        console.log("ProfileCard rendered");
    }, []);
  return <div>ProfileCard</div>;
}
