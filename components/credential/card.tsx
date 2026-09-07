import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ApiphaniCredential } from "./apiphani";
import { RutgersIcon } from "@/icons";

export function CredentialsCard() {
  return (
    <Card className="surface-card">
      <CardHeader className="pb-2">
        <CardTitle className="type-card-title-sm">Credentials</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 pt-0">
        <div className="credential-row">
          <span className="credential-row-icon bg-ink text-white">
            <Image
              src="/work/apiphani.webp"
              alt=""
              width={14}
              height={14}
              className="size-3.5 object-contain"
            />
          </span>
          <div className="min-w-0">
            <p className="credential-row-label">Current role</p>
            <p className="credential-row-value">
              Software Engineer · <ApiphaniCredential />
            </p>
          </div>
        </div>

        <div className="credential-row">
          <span className="credential-row-icon bg-[#CC0033] text-white">
            <RutgersIcon className="size-3.5 text-white" />
          </span>
          <div className="min-w-0">
            <p className="credential-row-label">Education</p>
            <p className="credential-row-value">
              Rutgers · Computer Science &apos;25 · Cum Laude
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
