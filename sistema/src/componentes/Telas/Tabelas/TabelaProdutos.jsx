import { Button, Container, Table } from "react-bootstrap";

export default function TabelaProdutos(props){

    function excluirProduto(produto){
        if(window.confirm("Deseja realmente excluir o produto " + produto.descricao)){
            // AQUI A ABORDAGEM É UTILIZANDO A SINTAXE PERMITIDA DA LINGUAGEM
            props.setListaDeProdutos(props.listaDeProdutos.filter((item)=>{
                return item.codigo !== produto.codigo
            }));

            //TUDO QUE OCORRE LA EM CIMA, EXEMPLIFICADA AQUI EM NESSAS LINHAS ABAIXO
            // let novaLista = [];
            // for(let i = 0; i < props.listaDeProdutos.length; i++){
            //     if(props.listaDeProdutos[i].codigo != produto.codigo)
            //         novaLista.push(props.listaDeProdutos)
            // }
            // props.setListaDeProdutos(novaLista);
        }
    }

    function alterarProduto(produto){
        props.setProdutoSelecionado(produto); // Passa o produto para a edição
        props.setModoEdicao(true); // Ativa o modo de edição
        props.setExibirTabela(false); // Vai para a tela de cadastro/edição
    }        
    

    return (
        <>
            <Container>
                <Button className="mb-3" variant="primary" onClick={()=>{
                    props.setExibirTabela(false);
                    props.setModoEdicao(false);
                    props.setProdutoSelecionado(false);
                }}>
                    Adicionar 
                </Button>
                <Table striped bordered hover>
                    <thead>
                        <th>Código</th>
                        <th>Descrição</th>
                        <th>Preço de Custo</th>
                        <th>Preço de Venda</th>
                        <th>Qtde em estoque</th>
                        <th>Imagem</th>
                        <th>Validade</th>
                        <th>Ações</th>
                    </thead>
                    <tbody>
                        {
                            props.listaDeProdutos?.map((produto)=>{ //A ? serve para testar se é valido ou não
                                return(
                                    <tr>
                                        <td>{produto.codigo}</td>
                                        <td>{produto.descricao}</td>
                                        <td>{produto.precoVenda}</td>
                                        <td>{produto.precoCusto}</td>
                                        <td>{produto.qtdEstoque}</td>
                                        <td><img style={{"height":"50px","width":"50px"}} src={produto.urlImagem} alt="foto do produto"/></td>
                                        <td>{produto.dataValidade}</td>
                                        <td>
                                            <Button variant="warning" onClick={()=>{alterarProduto(produto);}} > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                                            </svg></Button>    <Button  onClick={()=>{
                                                                                excluirProduto(produto);
                                                                            }} variant="danger"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                                                                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                                                                            </svg></Button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
                <p>Quantidade de produto(s) cadastrados: {props.listaDeProdutos.length}</p>
            </Container>
        </>
    );
}