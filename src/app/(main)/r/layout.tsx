import type { Metadata } from 'next';

export const metadata: Metadata = {
  robots: { index: false, follow: false, nocache: true },
  title: 'Body Doubling Room | Doubly',
};

export default function RoomLayout({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen bg-cream">{children}</div>;
}
