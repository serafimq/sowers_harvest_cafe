'use client'

import Link from "next/link";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

const StyleGuide = () => {
    return (
        <>
            {/* Typography */}
            <div className="flex flex-col gap-y-4 p-24">
                <h1>Heading 1</h1>
                <h2>Heading 2</h2>
                <h3>Heading 3</h3>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa, possimus dolor dolore enim iure, sint ex, modi velit excepturi libero quia sunt itaque id ratione quod. Assumenda distinctio mollitia quidem?
                </p>
                <div className="bg-black p-24 flex flex-col gap-y-4">
                    <Link href='/'>Link</Link>
                    {/* Buttons */}
                    <Button variant='default'>Button 1</Button>
                    <Button variant='orange'>Button 2</Button>
                    <Button variant='input'>Button 33</Button>
                    <Button variant='orange' size='sm'>Button sm</Button>
                    {/* Label and input */}
                    <Label htmlFor='firstname'>First Name</Label>
                    <Input type='firstname' id='firstname' placeholder='First Name' />
                    <Label htmlFor='lastname'>Last Name</Label>
                    <Input type='lastname' id='lastname' placeholder='Last   Name' />
                    {/* Select */}
                    <Select>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select a fruit" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                            <SelectLabel>Fruits</SelectLabel>
                            <SelectItem value="apple">Apple</SelectItem>
                            <SelectItem value="banana">Banana</SelectItem>
                            <SelectItem value="blueberry">Blueberry</SelectItem>
                            <SelectItem value="grapes">Grapes</SelectItem>
                            <SelectItem value="pineapple">Pineapple</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </div>
            
        </>
    )
};

export default StyleGuide;