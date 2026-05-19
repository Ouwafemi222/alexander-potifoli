import { Logo } from "@/components/ui/Logo";

export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-bg-primary">
      <Logo size="lg" href={null} priority />
      <div className="mt-6 h-0.5 w-24 animate-pulse rounded-full bg-accent/50" />
    </div>
  );
}
