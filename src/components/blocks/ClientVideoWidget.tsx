'use client';

import dynamic from 'next/dynamic';

const VideoWidget = dynamic(() => import('@/components/blocks/VideoWidget'), {
    ssr: false,
    loading: () => null,
});

export default function ClientVideoWidget() {
    return <VideoWidget />;
}
