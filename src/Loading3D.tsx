import Lottie from "lottie-react";
import animationData from "./loading.json";

export default function Loading3D() {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="w-72">
        <Lottie animationData={animationData} loop={true} />
      </div>
    </div>
  );
}