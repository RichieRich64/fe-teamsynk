// import AuthButtons from "@/components/common/auth-buttons";
import HomeScreen from "@/screens/home-page";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomeScreen />
    </Suspense>
  );
}

// export default function Home() {
//   return (
//     <div className="flex justify-center items-center flex-col gap-4 min-h-screen p-8">
//       <h2 className="text-4xl font-bold">TeamSynk</h2>
//       <p>
//         Welcome to TeamSynk, your go-to solution for seamless team
//         collaboration.
//       </p>
//       <AuthButtons />
//     </div>
//   );
// }
