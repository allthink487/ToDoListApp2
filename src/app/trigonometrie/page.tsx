import React from "react";
import Link from "next/link"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
export default function page() {
  return (
    <div className="flex flex-col gap-5 h-screen bg-slate-950 font-sans overflow-y-auto">
      <div>
        <h1 className="flex flex-col bg-blue-700 w-full text-white items-center font-bold  text-lg">
          <span>Trigonometrie</span>
        </h1>
      </div>

      <div className="flex flex-col p-2 ">
        <Card className="bg-slate-950 text-slate-50 ml-7 mt-5 h-full  ">
          <CardHeader>
            <CardTitle>Cours</CardTitle>
          </CardHeader>

          <CardContent className="px-10">
            <ul className="list-disc">
              <li>
                <Link href="/trigonometrie/cours/trigo" className="underline underline-offset-2 text-blue-700 ">Trigonometrie (Adama Traoré - Lycee Technique de Bamako)</Link>
              </li>

              <li>
                <a href="/trigo.pdf" className="underline underline-offset-2 text-blue-700 " download >Formules Trigonometriques</a>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-slate-950 text-slate-50 ml-7 mt-5 h-full  ">
          <CardHeader>
            <CardTitle>Exercices</CardTitle>
          </CardHeader>

          <CardContent className="px-10">
            <ul className="list-disc">
              <li>
                <a href="#" className="underline underline-offset-2 text-blue-700 " download>Exercices-Trigonometrie (Adama Traoré - Lycee Technique de Bamako)</a>
              </li>

              <li>
                <a href="#" className="underline underline-offset-2 text-blue-700 " download >Exercice et correction trigonometrie (MaliMath)</a>
              </li>

              <li>
                <a href="#" className="underline underline-offset-2 text-blue-700 " download>Recueil d’exercices</a>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-slate-950 text-slate-50 ml-7 mt-5 h-full  ">
          <CardHeader>
            <CardTitle>Devoirs</CardTitle>
          </CardHeader>

          <CardContent className="px-10">
            <ul className="list-disc">
              <li>
                <a href="#" className="underline underline-offset-2 text-blue-700 " download>Devoirs Surveillé- Madina - 2021 (corrigé) </a>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
