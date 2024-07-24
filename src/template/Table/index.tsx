"use client"

import * as S from './styles'

const Table =()=>{
  return(
    <S.Central>
        <S.Table>
            <S.TableHead>
                <S.Tr>
                    <S.Th>Texto</S.Th>
                    <S.Th>Significado</S.Th>
                </S.Tr>
            </S.TableHead>
            <S.TableBody>
                <S.Tr>
                    <S.Td>Feat</S.Td>
                    <S.Td>Novo recurso para</S.Td>
                </S.Tr>
                <S.Tr>
                    <S.Td>Fix</S.Td>
                    <S.Td>correção de bug</S.Td>
                </S.Tr>
                <S.Tr>
                    <S.Td>Docs</S.Td>
                    <S.Td>mudanças na documentação</S.Td>
                </S.Tr>
                <S.Tr>
                    <S.Td>Style</S.Td>
                    <S.Td>formatação, ponto e vírgula ausente, etc.</S.Td>
                </S.Tr>
                <S.Tr>
                    <S.Td>Refactor</S.Td>
                    <S.Td>refatorar código de produção, por exemplo, renomear uma variável</S.Td>
                </S.Tr>
                <S.Tr>
                    <S.Td>Test</S.Td>
                    <S.Td>adicionando testes ausentes, refatorando testes</S.Td>
                </S.Tr>
                <S.Tr>
                    <S.Td>Chore</S.Td>
                    <S.Td>atualização de tarefas pesadas, etc.</S.Td>
                </S.Tr>
            </S.TableBody>
            </S.Table>
            <S.Table>
            <S.TableHead>
                <S.Tr>
                    <S.Th>Texto</S.Th>
                    <S.Th>Descrição</S.Th>
                    <S.Th>Icone</S.Th>
                </S.Tr>
            </S.TableHead>
            <S.TableBody>
                <S.Tr>
                    <S.Td>:tada:</S.Td>
                    <S.Td>Initial commit</S.Td>
                    <S.Td>🎉</S.Td>
                </S.Tr>
                <S.Tr>
                    <S.Td>:bookmark:</S.Td>
                    <S.Td>Version tag</S.Td>
                    <S.Td>🔖</S.Td>
                </S.Tr>
                <S.Tr>
                    <S.Td>:sparkles:</S.Td>
                    <S.Td>New feature</S.Td>
                    <S.Td>✨</S.Td>
                </S.Tr>
            </S.TableBody>
            </S.Table>
            <a href="https://gist.github.com/parmentf/035de27d6ed1dce0b36a">Link para o restante</a>
    </S.Central>
  );
}
export default Table;