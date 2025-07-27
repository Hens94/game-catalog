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
import { useForm } from "react-hook-form";
import z from "zod";

const categories = ["Todos", "PS4", "PS5", "Xbox One", "Xbox Series", "Switch"];

const searchSchema = z.object({
  search: z.string().min(1, { message: "El campo es requerido" }),
  category: z.enum([
    "Todos",
    "PS4",
    "PS5",
    "Xbox One",
    "Xbox Series",
    "Switch",
  ]),
});

type SearchType = z.infer<typeof searchSchema>;

const SearchInput = () => {
  const form = useForm<SearchType>({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      category: "Todos",
      search: "",
    },
  });

  const onSubmit = (data: SearchType) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex items-center w-full border-2 border-light-green rounded-sm h-14"
      >
        <FormField
          control={form.control}
          name="category"
          defaultValue="Todos"
          render={({ field }) => (
            <FormItem className="flex items-center h-full border-light-green px-4">
              <FormControl>
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center justify-between outline-0 w-full text-sm font-bold  m-1 min-w-[120px] hover:cursor-pointer">
                    <span className="flex-1 text-left text-pepito">
                      {field.value}
                    </span>
                    <ChevronDown className="stroke-gray-400" />
                  </DropdownMenuTrigger>
                  <span className="border-l border-b-gray-400 h-8 ml-2"></span>
                  <DropdownMenuContent className="h-10 w-50 font-muted-foreground">
                    <div className="border-2 border-gray rounded-md bg-white">
                      <DropdownMenuLabel className="font-bold text-primary">
                        Categorias
                      </DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      {categories.map((category) => (
                        <DropdownMenuItem
                          key={category}
                          className="m-1.5 hover:bg-[#9DDBC9] border border-white rounded-md p-1.5"
                          onClick={() => field.onChange(category)}
                        >
                          {category}
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
                    className="w-full h-full outline-none px-4 text-sm"
                    {...field}
                  />
                  <Search className="flex justify-end mr-6 stroke-gray-400" />
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
