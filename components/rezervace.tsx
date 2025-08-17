"use client"

import { ActionResponse } from "@/types"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { ContactType } from "@/lib/schema"
import { useActionState, useEffect } from "react"
import { sendContact } from "@/lib/action"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button"
import { Loader2, MoveUpRight } from "lucide-react"
import Link from "next/link"
import { useGsapFadeIn } from "./useGsapFadeIn"
import { toast } from "react-hot-toast"

const actionState: ActionResponse<ContactType> = {
    success: false,
    submitted: false,
    message: ""
}

export default function Rezervace(){
    const [state, action, isPending] = useActionState(sendContact, actionState)
    useGsapFadeIn("#my-title5")
    useEffect(() => {
      if(state.success && state.submitted){
        toast.success(state.message)
      }else if(state.submitted && !state.success){
        toast.error(state.message)
      }
    }, [state.message, state.submitted, state.success])
    return(
        <section id="rezervace" className="flex flex-col w-full space-y-5  p-4 md:p-8 2xl:p-12">
            <h1 id="my-title5" className="font-averia text-6xl sm:text-7xl text-black">Rezervace</h1>
            <form action={action} autoComplete="on" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:grid-rows-3 gap-8">
                <div className="flex flex-col space-y-2">
                    <Label htmlFor="name">Jméno a příjmení*</Label>
                    <Input 
                        placeholder="Vaše jméno a příjmení"
                        id="name"
                        type="text"
                        name="name"
                        disabled={isPending}
                        autoComplete="fullname"
                        defaultValue={state?.inputs?.name}
                        />
                      {state?.errors?.name && (
                                 <p className="text-base font-semibold text-red-500">
                                 {state.errors.name}
                               </p>
                    )}
                </div>

                 <div className="flex flex-col space-y-2">
                    <Label htmlFor="email">E-mail*</Label>
                    <Input 
                        placeholder="Váš e-mail"
                        id="email"
                        type="email"
                        name="email"
                        autoComplete="email"
                        disabled={isPending}
                        defaultValue={state?.inputs?.email}
                        />
                      {state?.errors?.email && (
                                 <p className="text-base font-semibold text-red-500">
                                 {state.errors.email}
                               </p>
                    )} </div>

                      <div className="flex flex-col space-y-2">
                    <Label htmlFor="tel">Telefonní číslo*</Label>
                    <Input 
                        placeholder="Vaše telefonní číslo"
                        id="tel"
                        type="tel"
                        name="tel"
                        autoComplete="tel"
                        disabled={isPending}
                        defaultValue={state?.inputs?.tel}
                        />
                      {state?.errors?.tel && (
                                 <p className="text-base font-semibold text-red-500">
                                 {state.errors.tel}
                               </p>
                    )}
               </div>

                <div className="flex flex-col space-y-2">
                    <Label htmlFor="from">Datum příjezdu*</Label>
                    <Input 
                        placeholder="Vaše datum příjezdu"
                        id="from"
                        type="date"
                        name="from"
                        disabled={isPending}
                        defaultValue={state?.inputs?.from}
                        />
                      {state?.errors?.from && (
                                 <p className="text-base font-semibold text-red-500">
                                 {state.errors.from}
                               </p>
                    )}
               </div>

               <div className="flex flex-col space-y-2">
                    <Label htmlFor="to">Datum odjezdu*</Label>
                    <Input 
                        placeholder="Vaše datum odjezdu"
                        id="to"
                        type="date"
                        name="to"
                        disabled={isPending}
                        defaultValue={state?.inputs?.to}
                        />
                      {state?.errors?.to && (
                                 <p className="text-base font-semibold text-red-500">
                                 {state.errors.to}
                               </p>
                    )}
               </div>

               <div className="flex flex-col space-y-2">
                    <Label htmlFor="pokoj">Pokoj*</Label>
                        <Select name="pokoj" disabled={isPending} defaultValue={state?.inputs?.pokoj}>
      <SelectTrigger className="w-full sm:w-2/3">
        <SelectValue placeholder="Vyberte pokoj" />
      </SelectTrigger>
      <SelectContent>
          <SelectItem value="Jednolůžkový">Jednolůžkový</SelectItem>
          <SelectItem value="Dvoulůžkový">Dvoulůžkový</SelectItem>
          <SelectItem value="Třílůžkový">Třílůžkový</SelectItem>
          <SelectItem value="Čtyřlůžkový">Čtyřlůžkový</SelectItem>
          <SelectItem value="Pokoj Romantik">Pokoj Romantik</SelectItem>
          <SelectItem value="Dvojlůžkový apartmán">Dvojlůžkový apartmán</SelectItem>
      </SelectContent>
    </Select>
                      {state?.errors?.pokoj && (
                                 <p className="text-base font-semibold text-red-500">
                                 {state.errors.pokoj}
                               </p>
                    )}
               </div>

               <div className="flex flex-col space-y-2">
                    <Label htmlFor="pocetPokoju">Počet pokojů*</Label>
                    <Input 
                        placeholder="Zadejte počet pokojů"
                        id="pocetPokoju"
                        type="number"
                        name="pocetPokoju"
                        disabled={isPending}
                        defaultValue={state?.inputs?.pocetPokoju}
                        />
                      {state?.errors?.pocetPokoju && (
                                 <p className="text-base font-semibold text-red-500">
                                 {state.errors.pocetPokoju}
                               </p>
                    )}
               </div>

               <div className="flex flex-col space-y-2">
                    <Label htmlFor="pocetHostu">Počet hostů*</Label>
                    <Input 
                        placeholder="Zadejte počet hostů"
                        id="pocetHostu"
                        type="number"
                        name="pocetHostu"
                        disabled={isPending}
                        defaultValue={state?.inputs?.pocetHostu}
                        />
                      {state?.errors?.pocetHostu && (
                                 <p className="text-base font-semibold text-red-500">
                                 {state.errors.pocetHostu}
                               </p>
                    )}
               </div>

               <div className="flex flex-col space-y-2">
                    <Label htmlFor="rozlozeniLuzek">Rozlození lůžek*</Label>
                        <Select name="rozlozeniLuzek" disabled={isPending} defaultValue={state?.inputs?.rozlozeniLuzek}>
      <SelectTrigger className="w-full sm:w-2/3">
        <SelectValue placeholder="Vyberte rozlození lůžek" />
      </SelectTrigger>
      <SelectContent>
          <SelectItem value="Od sebe">Od sebe</SelectItem>
          <SelectItem value="K sobě">K sobě</SelectItem>
      </SelectContent>
    </Select>
                      {state?.errors?.rozlozeniLuzek && (
                                 <p className="text-base font-semibold text-red-500">
                                 {state.errors.rozlozeniLuzek}
                               </p>
                    )}
               </div>

                <div className="flex flex-col space-y-2">
                    <Label htmlFor="msg">Zpráva</Label>
                    <Textarea
                        placeholder="Napište zprávu"
                        id="msg"
                        name="msg"
                        disabled={isPending}
                        defaultValue={state?.inputs?.msg}
                        />
                      {state?.errors?.msg && (
                                 <p className="text-base font-semibold text-red-500">
                                 {state.errors.msg}
                               </p>
                    )}
               </div>

                <div className="flex flex-row items-center justify-end w-full text-center space-y-2">
                    <p className="text-xl">Odesláním souhlasíte se <Link className="font-bold" href="/zpracovani-os-udaju">zpracováním osobních údajů</Link></p>
               </div>
               
                <div className="flex flex-row justify-center items-center space-x-2">
                    <Button type="submit" className="rounded-[10px] text-xl">
                        {isPending ? <Loader2 className="animate-spin"/> : <>Odeslat <MoveUpRight/></>}
                    </Button>
               </div>
            </form>
        </section>
    )
}