import React from 'react';

import { FloatingDock } from '@/components/ui/floating-dock';
import { LinkItem } from '@/Types/types';

export default function FloatingDockLinks({ links }: { links: LinkItem[] }) {
  return (
    <div className="fixed left-4 top-1/2 md:-translate-y-1/2 z-50">
      <FloatingDock items={links} />
    </div>
  );
}
