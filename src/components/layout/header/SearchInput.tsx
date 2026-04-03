"use client";

import {
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/DropdownMenu";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/Form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { ChevronDown, Search } from "lucide-react";
import { useForm, useWatch } from "react-hook-form";
import useGamesByName from "@/hooks/useGamesByName";
import z from "zod";
import React from "react";

const platformsObject = [
  {id: 0, value: "todos", label: "Todos"},
  {id: 18, value: 'ps4', label: 'Playstation 4'},
  {id: 187, value: 'ps5', label: 'Playstation 5'},
  {id: 1, value: 'xbox-one', label: 'Xbox One'},
  {id: 186, value: 'xbox-series-sx', label: 'Xbox Series S/X'},
  {id: 7, value: 'nintendo-switch', label: 'Nintendo Switch'},
  {id: 4, value: 'pc', label: 'PC'},
] as const



const searchSchema = z.object({
  search: z.string().min(1, { message: "El campo es requerido" }),
  platform: z.object({
    id: z.number(),
    value: z.string(),
    label: z.string(),
  }),
});

type SearchType = z.infer<typeof searchSchema>;

const SearchInput = () => {
  const [searchTerm, setSearchTerm] = React.useState<string>("");
  const [selectedPlatform, setSelectedPlatform] = React.useState<number>(0);
  const { gamesByName, isLoading } = useGamesByName(searchTerm, selectedPlatform);

  const form = useForm<SearchType>({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      platform: platformsObject[0],
      search: "",
    },
  });

  const platform = useWatch({
    control: form.control,
    name: "platform",
  })

  console.log(selectedPlatform);

  const onSubmit = (data: SearchType) => {
    setSearchTerm(data.search);
    setSelectedPlatform(data.platform.id);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex items-center w-full border-2 border-border rounded-sm h-14 text-foreground bg-input "
      >
        <FormField
          control={form.control}
          name="platform"
          render={({ field }) => (
            <FormItem className="flex items-center h-full px-4">
              <FormControl>
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center justify-between outline-0 w-full text-sm font-bold m-1 min-w-[120px] hover:cursor-pointer">
                    <span className="flex-1 text-left">
                      {field.value.label}
                    </span>
                    <ChevronDown className="stroke-foreground" />
                  </DropdownMenuTrigger>
                  <span className="border-l border-foreground h-8 ml-2"></span>
                  <DropdownMenuContent className="h-10 w-50 ">
                    <div className="border-2 border-border rounded-md bg-popover overflow-x-hidden">
                      <DropdownMenuLabel className="font-bold text-foreground">
                        Categorias
                      </DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      {platformsObject.map((platform) => (
                        <DropdownMenuItem
                          key={platform.id}
                          className="m-1.5 hover:bg-accent rounded-md p-1.5 text-foreground hover:text-accent-foreground outline-0"
                          onClick={() => field.onChange(platformsObject.find(p => p.id === platform.id) || platformsObject[0])}
                        >
                          {platform.label}
                        </DropdownMenuItem>
                      ))}
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="search"
          render={({ field }) => (
            <FormItem className="w-full flex items-center">
              <FormControl>
                <div className="flex items-center h-full flex-1 relative">
                  <input
                    type="text"
                    placeholder="Buscar por juegos"
                    className="w-full h-full outline-none px-4 text-sm text-foreground"
                    {...field}
                  />
                  <Search className="flex justify-end mr-6 stroke-foreground" />
                </div>
              </FormControl>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

export default SearchInput;
