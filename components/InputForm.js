"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
// import { toast } from "@/components/ui/use-toast"

import { useToast } from "@/components/ui/use-toast"
import { ToastAction } from "@radix-ui/react-toast"

const EcoEnum = z.enum(['Bitcoin', 'Ethereum', 'Binance Smart Chain', 'Cardano', 'Polkadot', 'Avalanche', 'Solana', 'Cosmos', 'Ripple', 'Stellar', 'VeChain', 'Chainlink'])
const CryptoEnum= z.enum(['BTC', 'ETH', 'SOL', 'DOT', 'LTC', 'TRX', 'ADA', 'BNB', 'LINK', 'MATIC']);
const CryptoCatEnum= z.enum(['DeFi', 'Chain', 'NFT', 'Social', 'Blockchain Infrastructure', 'GameFi', 'CeFi', 'Blockchain Service', 'Stablecoin', 'Currency', 'Other']);
const CatEnum=z.enum(['Tier 1', 'Tier 2', 'Tier 3', 'Tier 4', 'Tier 5', 'Angels', 'Other'])
const RoundEnum=z.enum(['SEED', 'SERIES A', 'SERIES B', 'SERIES C', 'SERIES D', 'SERIES E', 'UNKNOWN', 'STRATEGIC'])
const LocationEnum=z.enum(['India', 'USA'])

const FormSchema = z.object({
  name: z.string().min(2, {
    message: `Username must be at least 2 characters.` ,
  }),
  tags: z.string().min(2, {
    message: `Tags must be at least 2 characters.` ,
  }),
  amount: z.string().min(2, {
    message: `Amount must be at least 2 characters.` ,
  }),
  crypto_cat: CryptoCatEnum.optional(),
  crypto: CryptoEnum.optional(),
  ecosystem:EcoEnum.optional(),
  category:CatEnum.optional(),
  date: z.date({
    required_error: "A date is required.",
  }),
  round:RoundEnum.optional(),
  location:LocationEnum.optional(),
  
})

export function InputForm() {

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues:{
      name:'',
      crypto:'BTC',
      crypto_cat:'DeFi',
      
      ecosystem:'Bitcoin',
      category:'Tier 1',
      tags:'',
      amount:'',
      round:'SEED',
      location:'India',
    }
  });
  const { toast } = useToast()

  function onSubmit(val) {
    event.preventDefault();
    toast({
      title: "Scheduled: Catch up ",
      description: "Friday, February 10, 2023 at 5:57 PM",
      action: (
        <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
      ),
    })
    console.log(val)
  }
  return (
    <div className=" w-1/2 p-10 ">
      <p className="text-4xl">Funding Page</p>
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <FormField
          control={form.control}
          className=""
          name="crypto"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between rounded-lg p-3 shadow-sm">
              <div className="space-y-0.5 pr-10">
                <FormLabel>Crypto</FormLabel>
              </div>
              <Select
                onValueChange={(value) => field.onChange(CryptoEnum.parse(value))}
                defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a Crypto" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {CryptoEnum.options.map((crypto) => (
                    <SelectItem key={crypto} value={crypto}>
                      {crypto}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          className=""
          name="crypto_cat"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between rounded-lg p-3 shadow-sm">
              <div className="space-y-0.5 pr-10">
                <FormLabel>crypto_cat</FormLabel>
              </div>
              <Select
                onValueChange={(value) => field.onChange(CryptoCatEnum.parse(value))}
                defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a Crypto Category" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {CryptoCatEnum.options.map((cryptoCat) => (
                    <SelectItem key={cryptoCat} value={cryptoCat}>
                      {cryptoCat}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          className=""
          name="ecosystem"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between rounded-lg p-3 shadow-sm">
              <div className="space-y-0.5 pr-10">
                <FormLabel>Ecosystem</FormLabel>
              </div>
              <Select
                onValueChange={(value) => field.onChange(EcoEnum.parse(value))}
                defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a Ecosystem" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {EcoEnum.options.map((eco) => (
                    <SelectItem key={eco} value={eco}>
                      {eco}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between rounded-lg p-3 shadow-sm">
              <div className="space-y-0.5 ">
              <FormLabel>Date</FormLabel>
              </div>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
             
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          className=""
          name="name"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between rounded-lg p-3 shadow-sm">
              <div className="space-y-0.5 pr-10">
                <FormLabel>Investor/Org</FormLabel>
              </div>
              
              <FormControl>
                <Input placeholder="Type Org/Your Name" {...field} />
              </FormControl>
              <FormMessage />
              
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          className=""
          name="category"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between rounded-lg p-3 shadow-sm">
              <div className="space-y-0.5 pr-10">
                <FormLabel>Inventment Category</FormLabel>
              </div>
              <Select
                onValueChange={(value) => field.onChange(CatEnum.parse(value))}
                defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a Category" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {CatEnum.options.map((cat) => (
                    <SelectItem key={cat} value={cat}>
                      {cat}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        <div className="flex">
        <FormField
          control={form.control}
          className=""
          name="tags"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between rounded-lg p-3 shadow-sm">
              <div className="space-y-0.5 pr-10">
                <FormLabel>Tags</FormLabel>
              </div>
              <div>
                <FormControl>
                  <Input placeholder="Tags" {...field} />
                </FormControl>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          className=""
          name="amount"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between rounded-lg p-3 shadow-sm">
              <div className="space-y-0.5 pr-10">
                <FormLabel>Amount</FormLabel>
              </div>
              <div>
                <FormControl>
                  <Input placeholder="Amount" {...field} />
                </FormControl>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />
        </div>
        <div className="flex">
          <div className="grow">
        <FormField
          control={form.control}
          className=""
          name="round"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between rounded-lg p-3 shadow-sm">
              <div className="space-y-0.5 pr-10">
                <FormLabel>Round</FormLabel>
              </div>
              <Select
                onValueChange={(value) => field.onChange(RoundEnum.parse(value))}
                defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a Round" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {RoundEnum.options.map((round) => (
                    <SelectItem key={round} value={round}>
                      {round}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        </div>
        <div className="grow">

        <FormField
          control={form.control}
          className=""
          name="location"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between rounded-lg p-3 shadow-sm">
              <div className="space-y-0.5 pr-10">
                <FormLabel>Location</FormLabel>
              </div>
              <Select
                onValueChange={(value) => field.onChange(LocationEnum.parse(value))}
                defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a Location" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {LocationEnum.options.map((loco) => (
                    <SelectItem key={loco} value={loco}>
                      {loco}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormItem>
          )}
        /></div>
          </div>
        <div className="w-full mt-6 flex justify-end">
        <Button onClick={() => {
        toast({
          title: "Scheduled: Catch up ",
          description: "Friday, February 10, 2023 at 5:57 PM",
          action: (
            <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
          ),
        })}}
        type="submit">Submit</Button>
        </div>
      </form>
    </Form>
    </div>
  )
}
