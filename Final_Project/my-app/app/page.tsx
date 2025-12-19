"use client";

import { useState, createContext, useContext } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";


type Car = {
  id: number
  brand: string
  name: string
  price: number
  engine: string
  power: string
  drive: string
  image: string
}

// ---- Mock data ----
const cars: Car[] = [
  {
    id: 1,
    brand: "Toyota",
    name: "Camry",
    price: 4100000,
    engine: "2.5 бензин",
    power: "200 л.с.",
    drive: "Передний",
    image: "https://avatars.mds.yandex.net/get-autoru-vos/2154805/2a46faa01569035d5e4217a7c0d066b4/832x624"
  },
  {
    id: 2,
    brand: "BMW",
    name: "3 Series",
    price: 4300000,
    engine: "2.0 бензин",
    power: "258 л.с.",
    drive: "Задний",
    image: "https://avatars.mds.yandex.net/get-autoru-vos/16408920/28c5b2e177c36d4b7401a1b9a41602cd/832x624"
  },
  {
    id: 3,
    brand: "Audi",
    name: "A4",
    price: 4100000,
    engine: "2.0 бензин",
    power: "249 л.с.",
    drive: "Полный",
    image: "https://avatars.mds.yandex.net/get-autoru-vos/11621042/cc7f544aa0f49078bf30d5cc40bc0233/832x624"
  }
];

// ---- Context ----
type CompareContextType = {
  compare: Car[]
  toggleCompare: (car: Car) => void
}

const CompareContext = createContext<CompareContextType | null>(null)


function useCompare() {
  const context = useContext(CompareContext)
  if (!context) {
    throw new Error("useCompare must be used within CompareContext.Provider")
  }
  return context
}
export default function AutoCompareApp() {
  const [compare, setCompare] = useState<Car[]>([]);
  const [brandFilter, setBrandFilter] = useState("all");
  const [priceFilter, setPriceFilter] = useState("all");

  const toggleCompare = (car: Car) => {
    setCompare((prev) => {
      if (prev.find((c) => c.id === car.id)) {
        return prev.filter((c) => c.id !== car.id);
      }
      if (prev.length >= 3) return prev;
      return [...prev, car];
    });
  };

  const filteredCars = cars.filter((car) => {
    if (brandFilter !== "all" && car.brand !== brandFilter) return false;
    if (priceFilter === "low" && car.price > 4200000) return false;
    if (priceFilter === "high" && car.price <= 4200000) return false;
    return true;
  });

  return (
    <CompareContext.Provider value={{ compare, toggleCompare }}>
      <div className="p-6 space-y-6">
        <h1 className="text-2xl font-bold">Каталог автомобилей</h1>

        {/* Filters */}
        <div className="flex gap-4">
          <select className="border p-2" onChange={(e) => setBrandFilter(e.target.value)}>
            <option value="all">Все бренды</option>
            <option value="Toyota">Toyota</option>
            <option value="BMW">BMW</option>
            <option value="Audi">Audi</option>
          </select>

          <select className="border p-2" onChange={(e) => setPriceFilter(e.target.value)}>
            <option value="all">Любая цена</option>
            <option value="low">До 4 200 000</option>
            <option value="high">От 4 200 000</option>
          </select>
        </div>

        {/* List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {filteredCars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>

        {/* Compare section */}
        {compare.length >= 2 && <CompareTable />}
      </div>
    </CompareContext.Provider>
  );
}

function CarCard({ car }: { car: Car }) {
  const { compare, toggleCompare } = useCompare();
  const checked = !!compare.find((c: Car) => c.id === car.id);

  return (
    <Card>
      <CardContent className="p-4 space-y-2">
        <img src={car.image} alt={car.name} className="rounded" />
        <h2 className="font-semibold">{car.brand} {car.name}</h2>
        <p className="text-sm text-muted-foreground">{car.price.toLocaleString()} ₽</p>
        <div className="flex items-center gap-2">
          <Checkbox checked={checked} onCheckedChange={() => toggleCompare(car)} />
          <span className="text-sm">Сравнить</span>
        </div>
      </CardContent>
    </Card>
  );
}

function CompareTable() {
  const { compare } = useCompare();

  return (
    <div className="space-y-2">
      <h2 className="text-xl font-semibold">Сравнение</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Характеристика</TableHead>
            {compare.map((car) => (
              <TableHead key={car.id}>{car.brand} {car.name}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Цена</TableCell>
            {compare.map((car) => (
              <TableCell key={car.id}>{car.price.toLocaleString()} ₽</TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell>Двигатель</TableCell>
            {compare.map((car) => (
              <TableCell key={car.id}>{car.engine}</TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell>Мощность</TableCell>
            {compare.map((car) => (
              <TableCell key={car.id}>{car.power}</TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell>Привод</TableCell>
            {compare.map((car) => (
              <TableCell key={car.id}>{car.drive}</TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
