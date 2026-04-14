"use client";

import { useEffect, useRef } from "react";
import Hls from "hls.js";

interface HlsVideoProps {
  src?: string;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Plays an HLS (.m3u8) stream.
 *  - Uses native support when available (Safari).
 *  - Falls back to hls.js elsewhere.
 *  - If no src is provided, renders a black placeholder div so the UI
 *    still looks right while the user plugs in their own stream URL.
 */
export function HlsVideo({ src, className, style }: HlsVideoProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !src) return;

    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = src;
      return;
    }

    if (Hls.isSupported()) {
      const hls = new Hls({ enableWorker: true });
      hls.loadSource(src);
      hls.attachMedia(video);
      return () => hls.destroy();
    }
  }, [src]);

  if (!src) {
    // TODO: replace with <video> or HLS player pointing to your video URL
    return (
      <div
        aria-hidden
        className={`absolute inset-0 w-full h-full bg-black ambient-bg ${className ?? ""}`}
        style={style}
      />
    );
  }

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      className={`absolute inset-0 w-full h-full object-cover ${className ?? ""}`}
      style={style}
    />
  );
}
