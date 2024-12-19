import { CardLogin } from '@/components/CardLogin';
import { HeaderTriagem } from '@/components/HeaderTriagem';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import BodyTriagem from '@/components/BodyTriagem';

export default function Triagem() {
  return (
    <div className="flex flex-col h-screen">
      <HeaderTriagem />
      <BodyTriagem />
    </div>
  );
}



