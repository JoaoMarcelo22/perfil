"use client"
import * as S from "./styles"
import Link from 'next/link';
import React from 'react';

interface BotaoLinkProps {
  href: string;          // rota de destino
  children: React.ReactNode; // conteúdo do botão
}

const BotaoLink: React.FC<BotaoLinkProps> = ({ href, children }) => {
    return(
      <>
        <Link href={href} passHref legacyBehavior>
          <S.A>{children}</S.A>
        </Link>
      </>
    )
  }
  export default BotaoLink;