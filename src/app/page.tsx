import React from "react";
import Link from "next/link";
export default function page() {
  return (
    <div className="flex flex-col gap-5 h-screen bg-slate-950 font-sans overflow-y-auto">
      <div>
        <h1 className="flex flex-col bg-blue-700 w-full text-white items-center font-bold  text-lg">
          <span>11eme Science</span>
          <span>Welcome !!!</span>
        </h1>
      </div>

      <div className="flex flex-col items-center w-full text-slate-50 font-bold text-center gap-3 leading-8 p-3">
        <div className=" border border-blue-700 rounded-md py-3 px-6 bg-slate-950 text-white font-bold">
          Programme
        </div>
        <ul>
          <li className="active:text-blue-700 underline underline-offset-2 text-blue-700 ">
            <Link href="/trigonometrie" download>
              Trigonometrie
            </Link>
          </li>
          <li className="active:text-blue-700 underline underline-offset-2 text-blue-700 ">
            <Link href="/equation-inequation">
              Résolution d’equations - d’inéquations - de systèmes
            </Link>
          </li>
          <li className="active:text-blue-700 underline underline-offset-2 text-blue-700 ">
            <Link href="#">Fonctions numériques d’une variable réelle</Link>
          </li>
          <li className="active:text-blue-700 underline underline-offset-2 text-blue-700 ">
            <Link href="#">Notion de géométrie plane</Link>
          </li>
          <li className="active:text-blue-700 underline underline-offset-2 text-blue-700 ">
            <Link href="#">Étude des suites numériques</Link>
          </li>
          <li className="active:text-blue-700 underline underline-offset-2 text-blue-700 ">
            <Link href="#">Notion de dénombrement et probabilité</Link>
          </li>
          <li className="active:text-blue-700 underline underline-offset-2 text-blue-700 ">
            <Link href="#">Notion de géométrie dans l’espace</Link>
          </li>
        </ul>
      </div>

      <div className="flex flex-col items-center w-full text-slate-50 font-bold text-center gap-3 leading-8 p-3">
        <div className=" border border-blue-700 rounded-md py-3 px-6 bg-slate-950 text-white font-bold">
          Annales
        </div>
        <ul>
          <li className="active:text-blue-700 underline underline-offset-2 text-blue-700">
            <Link href="#">Receuilles d’exercices de Maths</Link>
          </li>
        </ul>
      </div>

      <div className="flex flex-col items-center w-full text-slate-50 font-bold text-center gap-3 leading-8 p-3">
        <div className=" border border-blue-700 rounded-md py-3 px-6 bg-slate-950 text-white font-bold">
          Examens-Compositions
        </div>

        <ul>
          <li className="active:text-blue-700 flex flex-col">
            Compositions-1er Trimestre
            <div className="flex gap-x-2">
              <Link className="text-blue-700" href="#">
                2010
              </Link>
              <Link className="text-blue-700" href="#">
                2011
              </Link>
              <Link className="text-blue-700" href="#">
                2015
              </Link>
              <Link className="text-blue-700" href="#">
                2018
              </Link>
              <Link className="text-blue-700" href="#">
                2021
              </Link>
            </div>
          </li>
          <li className="active:text-blue-700">
            Compositions-2eme Trimestre
            <div className="flex gap-x-2">
              <Link className="text-blue-700" href="#">
                2016
              </Link>
              <Link className="text-blue-700" href="#">
                2020
              </Link>
            </div>
          </li>

          <li className="active:text-blue-700">
            Compositions-3eme Trimestre
            <div className="flex gap-x-2">
              <Link className="text-blue-700" href="#">
                2010
              </Link>
              <Link className="text-blue-700" href="#">
                2011
              </Link>
              <Link className="text-blue-700" href="#">
                2015
              </Link>
              <Link className="text-blue-700" href="#">
                2018
              </Link>
              <Link className="text-blue-700" href="#">
                2021
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
