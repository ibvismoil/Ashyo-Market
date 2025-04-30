import { styled } from "styled-components"

export const HeaderTopStyle = styled.div`
    background-color: #EBEFF3;
    padding: 11px 0;
   .header-top{
        display: flex;
        align-items: center;
        justify-content: space-between;
   }
    nav{
        display: flex;
        align-items: center;
        gap: 28px;
        a{
            display: flex;
            align-items: center;
            gap: 13px;
            font-weight: 400;
            font-size: 14px;
            line-height: 130%;
            letter-spacing: 0%;
            color: #545D6A;
            transition: all 0.3s;

             &:hover{
                 color: #134E9B;
            }
        }
    }
    nav ~ div{
        display: flex;
        align-items: center;
        gap: 25px;

        a{
            font-weight: 600;
            font-size: 14px;
            line-height: 130%;
            letter-spacing: 0%;
            color: #545D6A;

            &:hover{
                 color: #134E9B;
            }
        }

        div{
            display: flex;
            align-items: center;
            gap: 7px;
            color: #545D6A;
        }
    }
`

