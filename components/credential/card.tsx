import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ApiphaniCredential } from "./apiphani";
import { ContentBadge } from "@/components/content";
import { RutgersIcon } from "@/icons";

export function CredentialsCard() {
  return (
    <Card className="surface-card">
      <CardHeader className="pb-2">
        <CardTitle className="type-card-title-sm">Credentials</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap items-center gap-2">
          <ApiphaniCredential />
          <ContentBadge
            label="Rutgers University · Computer Science · 2025 · Cum Laude"
            tag
            color="bg-[#CC0033] text-white"
            icon={<RutgersIcon className="size-3.5 text-white" />}
            className="h-auto min-h-7 px-3 py-1.5 text-xs sm:text-sm"
          />
        </div>
      </CardContent>
    </Card>
  );
}
