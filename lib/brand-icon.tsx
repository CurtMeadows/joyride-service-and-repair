/* eslint-disable @next/next/no-img-element */

import { readFile } from "node:fs/promises";
import { join } from "node:path";

const logoPath = join(process.cwd(), "public/images/transparent-logo.png");

export async function getBrandLogoDataUrl() {
  const logoBuffer = await readFile(logoPath);

  return `data:image/png;base64,${logoBuffer.toString("base64")}`;
}

type BrandIconProps = {
  logoDataUrl: string;
  innerPadding?: string;
};

export function BrandIcon({ logoDataUrl, innerPadding = "12%" }: BrandIconProps) {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(145deg, #eef2f7, #d7dde6)",
      }}
    >
      <div
        style={{
          display: "flex",
          height: "78%",
          width: "78%",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "24%",
          padding: innerPadding,
          background: "linear-gradient(160deg, #ffffff, #edf1f6)",
          boxShadow:
            "inset 0 1px 0 rgba(255,255,255,0.88), 0 12px 28px rgba(49, 58, 70, 0.18)",
        }}
      >
        <img
          src={logoDataUrl}
          alt=""
          width={1536}
          height={1024}
          style={{
            width: "100%",
            height: "auto",
            objectFit: "contain",
          }}
        />
      </div>
    </div>
  );
}
