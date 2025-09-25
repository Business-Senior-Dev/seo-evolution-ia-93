
import { useState } from "react";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { MapPin, Search } from "lucide-react";

interface BusinessSearchFormProps {
  onSubmit: (businessName: string, location: string) => void;
  isSearching: boolean;
}

export const BusinessSearchForm = ({ onSubmit, isSearching }: BusinessSearchFormProps) => {
  const form = useForm({
    defaultValues: {
      businessName: "",
      location: ""
    }
  });

  const handleSubmit = form.handleSubmit((data) => {
    onSubmit(data.businessName, data.location);
  });

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="businessName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Nombre del negocio"
                      className="bg-seo-dark border-seo-blue/20 pl-10"
                      {...field}
                      required
                    />
                  </div>
                </FormControl>
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Ciudad o ubicación"
                      className="bg-seo-dark border-seo-blue/20 pl-10"
                      {...field}
                      required
                    />
                  </div>
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        
        <Button 
          type="submit" 
          className="w-full md:w-auto bg-gradient-to-r from-seo-blue to-seo-cyan hover:opacity-90" 
          disabled={isSearching}
        >
          {isSearching ? "Analizando..." : "Analizar negocio"}
        </Button>
      </form>
    </Form>
  );
};
