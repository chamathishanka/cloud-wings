import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs";
import {
    Select,
    SelectTrigger,
    SelectContent,
    SelectItem,
} from "@/components/ui/select";
import React, { useState } from "react";

const FlightForm: React.FC<{ passengerCount: number, setPassengerCount: (count: number) => void }> = ({ passengerCount, setPassengerCount }) => {
    const cities = ["Lahore International", "Dubai International", "New York JFK", "London Heathrow", "Tokyo Haneda"];

    return (
        <form className="grid grid-cols-1 lg:grid-cols-5 gap-2">
            {/* Departure City */}
            <div className="relative">
                <Label htmlFor="departure-city" className="block text-xs sm:text-sm text-customMaroon">
                    Departure City
                </Label>
                <Select>
                    <SelectTrigger>
                        <Input
                            id="departure-city"
                            placeholder="Select Departure City"
                            readOnly
                            className="border-customgrey text-xs sm:text-sm p-1 sm:p-2"
                        />
                    </SelectTrigger>
                    <SelectContent>
                        {cities.map((city) => (
                            <SelectItem key={city} value={city} className="text-xs sm:text-sm">
                                {city}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            {/* Arrival City */}
            <div className="relative">
                <Label htmlFor="arrival-city" className="block text-xs sm:text-sm text-customMaroon">
                    Arrival City
                </Label>
                <Select>
                    <SelectTrigger>
                        <Input
                            id="arrival-city"
                            placeholder="Select Arrival City"
                            readOnly
                            className="border-customgrey text-xs sm:text-sm p-1 sm:p-2"
                        />
                    </SelectTrigger>
                    <SelectContent>
                        {cities.map((city) => (
                            <SelectItem key={city} value={city} className="text-xs sm:text-sm">
                                {city}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            {/* Departure Date */}
            <div className="relative">
                <Label htmlFor="departure-date" className="block text-xs sm:text-sm text-customMaroon">
                    Departure Date
                </Label>
                <Input id="departure-date" type="date" className="border-customgrey text-xs sm:text-sm p-1 sm:p-2" />
            </div>

            {/* Arrival Date */}
            <div className="relative">
                <Label htmlFor="arrival-date" className="block text-xs sm:text-sm text-customMaroon">
                    Arrival Date
                </Label>
                <Input id="arrival-date" type="date" className="border-customgrey text-xs sm:text-sm p-1 sm:p-2" />
            </div>

            {/* Passengers */}
            <div className="relative">
                <Label htmlFor="passengers" className="block text-xs sm:text-sm text-customMaroon">
                    Passengers
                </Label>
                <Select
                    onValueChange={(value: string) => setPassengerCount(Number(value))}
                >
                    <SelectTrigger>
                        <Input
                            id="passengers"
                            placeholder={`${passengerCount} Passengers`}
                            readOnly
                            className="border-customgrey text-xs sm:text-sm p-1 sm:p-2"
                        />
                    </SelectTrigger>
                    <SelectContent>
                        {[1, 2, 3, 4, 5].map((count) => (
                            <SelectItem key={count} value={count.toString()} className="text-xs sm:text-sm">
                                {count} Passenger{count > 1 && "s"}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
        </form>
    );
};

export function TabsDemo() {
    const [businessPassengerCount, setBusinessPassengerCount] = useState(1);
    const [firstClassPassengerCount, setFirstClassPassengerCount] = useState(1);

    return (
        <Tabs defaultValue="business-class" className="w-full bg-neureal-0">
            <TabsList className="flex justify-center w-full">
                <TabsTrigger
                    value="business-class"
                    className="w-1/2 lg:w-1/4 text-center text-xs sm:text-sm"
                >
                    BUSINESS CLASS
                </TabsTrigger>
                <TabsTrigger
                    value="first-class"
                    className="w-1/2 lg:w-1/4 text-center text-xs sm:text-sm"
                >
                    FIRST CLASS
                </TabsTrigger>
            </TabsList>
            <TabsContent value="business-class">
                <Card className="w-full">
                    <CardHeader>
                        <CardTitle className="text-sm sm:text-base">Book a Business Class Flight</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <FlightForm passengerCount={businessPassengerCount} setPassengerCount={setBusinessPassengerCount} />
                    </CardContent>
                </Card>
            </TabsContent>

            <TabsContent value="first-class">
                <Card className="w-full">
                    <CardHeader>
                        <CardTitle className="text-sm sm:text-base">Book a First Class Flight</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <FlightForm passengerCount={firstClassPassengerCount} setPassengerCount={setFirstClassPassengerCount} />
                    </CardContent>
                </Card>
            </TabsContent>
        </Tabs>
    );
}