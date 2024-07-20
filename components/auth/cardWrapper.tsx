"use client";
import React from "react";
import { Card, CardFooter, CardContent, CardHeader } from "../ui/card";
import Header from "./Header";
import Social from "./Social";
import BackButton from "./BackButton";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  showSocial?: boolean;
  backButtonHref: string;
}

const cardWrapper = ({
  children,
  headerLabel,
  backButtonLabel,
  showSocial,
  backButtonHref,
}: CardWrapperProps) => {
  return (
    <Card className="w-[400px]  shadow-md">
      <CardHeader>
        <Header label={headerLabel} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocial && (
        <CardFooter>
          <Social />
        </CardFooter>
      )}
      <CardFooter>
        <BackButton
        label={backButtonLabel}
        href={backButtonHref}
        />
      </CardFooter>
    </Card>
  );
};

export default cardWrapper;
