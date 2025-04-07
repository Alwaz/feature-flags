import React from 'react';

const Title = ({ title, subTitle }: { title: string; subTitle: string }) => {
  return (
    <>
      <h1 className="text-3xl font-bold tracking-tight md:text-4xl">{title}</h1>
      <p className="mt-3 text-muted-foreground">{subTitle}</p>
    </>
  );
};

export default Title;
