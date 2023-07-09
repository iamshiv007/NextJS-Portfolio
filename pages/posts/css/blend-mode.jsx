import Navbar from "@/components/Navbar";
import Theme from "@/components/Theme";
import MobileNavbar from "@/components/mobileNavbar";
import Head from "next/head";
import React, { Fragment, useState } from "react";

const BlendMode = () => {
  const [blendMode, setBlendMode] = useState("normal");

  return (
    <Fragment>
      <Head>
        <title>Background Blend Mode</title>
      </Head>

      <Theme>
        <Navbar />
        <MobileNavbar />

        <div className="layoutContainer">
          <div className="layoutBox1">
            <h2 className="blog-heading">Background Blend Mode</h2>

            <p className="bg-gray-200 my-4 p-2 rounded dark:bg-black">
              {" "}
              <strong>Note:-</strong> Before we are starting a example you
              should know, this property use for two images.
            </p>

            <select
              value={blendMode}
              onChange={(e) => setBlendMode(e.target.value)}
              name="blend-mode"
              id=""
              className="border border-black font-bold font-xl dark:bg-black py-1 px-2"
            >
              <option value="normal">normal</option>
              <option value="screen">screen</option>
              <option value="multiply">multiply</option>
              <option value="overlay">overlay</option>
              <option value="darken">darken</option>
              <option value="lighten">lighten</option>
              <option value="color-dodge">color-dodge</option>
              <option value="saturation">saturation</option>
              <option value="color">color</option>
              <option value="difference">difference</option>
              <option value="hue">hue</option>
              <option value="luminocity">luminocity</option>
              <option value="color-burn">color-burn</option>
              <option value="hard-light">hard-light</option>
              <option value="soft-light">soft-light</option>
            </select>

            <div className="text-xl mt-6 mb-3">
              background-blend-mode : <strong>{blendMode}</strong>
            </div>

            <div
              style={{
                backgroundBlendMode: blendMode,
                backgroundImage: `url(/images/circle.png), url(/images/x.png)`,
              }}
              className="w-52 h-52 bg-contain mt-8"
            ></div>
          </div>

          <div className="layoutBox2">
            <p>
              CSS was first proposed by Håkon Wium Lie in 1994 and has since
              become a fundamental technology for designing and styling web
              pages.
            </p>

            <div className="mt-3"></div>
            <img
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUSExMWFRUWFhgXGBgWFhcVFRYXFxcWFxUVFRUaHSkgGBomGxYWITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi0lHR8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAL4BCgMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAgMEBQYHAQj/xABNEAABAwEFAwUMCAQEAwkAAAABAAIDEQQFEiExBkFREyJhcZEHMjRScoGSobGywfAUFzNCVHPR0iRis+EVJZPxFiOiNTZDU2OCg6PC/8QAGwEAAgMBAQEAAAAAAAAAAAAAAAECAwQFBgf/xAA0EQACAQIFAQUFCAMBAAAAAAAAAQIDEQQSITFBURMiMmFxFDORsdEFFlJTgZKh8CNi4UL/2gAMAwEAAhEDEQA/ANxQQQQAEFVLp7oF32q1GyQ2gOlBcBzXBry2uIRvIo7QnLUCoqFIbN3r9JdayDVsdqfC3/444g//AOzGgCbQQQQAEEEEABBBBAAQQQQBnN9+ES+WU0CdX54RL5ZTVUsmcQeghIojDsXVxq6gDiIdUoiHVAwy6UjaLQ1gq4qDtG0bc8Oag5xRJQb2J18opqoZt51DSTTFmegbgoWe/HuBIGXZU8AoKeeQmoy4dSrc7ssVNl1N6tNTio3QZ5uP6JeG8Guyr2A0CzZlscHZnT5qFLXbemdKip7fMk2ySgizX+0PwGpoCNBWqsNm70dSqjbRWlc+lWaxyVaOpKM7kZQy6jkpN6MSiPUyIhZt6VckbLvSxQwQm5NU6cm6QGxIpFckZRl83NHamYJHSgf+lNLDWuodybhiHQareZjBNormsdxWoz2e2Ga0Nx8jZw1v/Ic5paH2iTEahocSG4QXHDuqtT7i9jdHdULn1xzOkmJNS52N5wuJOtWhpr0rLrV3LWS3q+y2WVzrLEGvtEriDyJNS6HHo6SgqOGLPQqwT916KC8YrPZw03dE1sBIHAgctGfEYAABvAcd4oAbYgitcCKjMFGQAEEEEABBBBAAQQQQBnF+eES+WU0CeX54RL5ZTMKl7liOrkiC49RAOxGRGoyBnUjPKG5lKqpbUXmcfJMOfxKhJ2Q4q4z2lvMuOVabhXXrRLHZqNzFXHo06ykrDYTIWk6NOp0rUku/RW+7Lv0FMvWT4xWaclc2U4XRAi6HvFXGg3D50Sh2dc5oA9iuX0DOm6mfSdwUhZ7Juoqm2XKKKLZO5+Htq40O5Qd7bA2iMF8XOIqaaE04LaY46BckiCM01qmLuvRmJXLay4FjwWvadCKEHgR2q3XXaqgBSu0mzDZuewYZBo4b6bjxH6qkWa2uikMcowvaaH216j2KCqatoJU9NS6Eoryk7LMHtDhmlJFsTurmFqwhZDqlykLJvS5TY0EemqduCa0QI1e2XhFFTlJY466Y3tZXqqc1DXtecErS1tuia0jSOeON7jnVvLVJYDlm0Bw3FYptnbXy22dznVIkc0fyhry1rRwFAodjulXOu+Edul9gwlTjKU3dpPRLk17/AAuzzR/RpbbZbNZPw1jmYOU48vaXUfJXeA1td5Keu2buDkjDydhDS3DXHHygHES4sdemtVirmncf7IhCXby6E/u/S/G/gj0Rc952SCCKA2yB/JMbHidNHicGANDnc7UgCvSnv/EFk/FQf60f6rzTXpKHnKO3l0H936X438Eelv8AiCyfioP9aP8AVD/iCyfioP8AWj/VeafOUPOUdvIPu/S/G/gj05Zb0glOGOaJ5GdGSNcacaAp8vOVluq1QwMvCIkMxHC5pOJrmkirhTmtJBG8Hfqte2H2wZb4w11GTtHOZucPHb0cRu7CradXM7Pc5mN+zOxj2lKWaK0fVNdf766NMt6CCCtOUZxfg/iJfLKZp7f3hMvlfAJkqHuTR1Feuor0hijUZEajIGFecisvdaC6VxJqS49pPsz9S09+h6lkV2c60dGKn6n2quZZT3NauqwNETBSp1PWp6zQtAqBmoq7q0HRuUxZsljZvSAd+SWY5LYBqj8mlYeZAEi46RcLEV0Si7hZA5QFUXukXNVrbTGOezJ3S2uVeo+1XYsomF7AOje05gtPsWbPllcllT2KTspaQ9hw+dvin5y8ynJNFTtlX4LS9g0Nf1+CuEmi6NPwmGqu8I2TenCb2XenCm9yCCvTaqcvTRMRS9pvC7R+bL77lGKT2m8LtH5svvuUYh7s91R93H0XyQZp3IzmJNHY7ikTCILpXEDAggggDdu5lC191xMcA5ruUBBFQQXuqCN4VH202Ulu6UWuylwiDqgjN0LvFPFp0BPUem+9yr/s2Hrk/qOVpnha9pY4BzXAggioIOoIWpQzQXojx0sbPC42q1rFyldcNXf89GVbYbbFluZhcQydg57Nzh47PiN3YVb1ie2eykt3TC12UuEeLECM3RO8V3Fp0BPUem+7DbYstzMLqNnaOezc4eOzo4jd1UJcJu+WW4sbgoZPacNrTe/WL6Py+WmuzIi//CZfK+ATJPNoPCZfK+ATFRe5zkdRXrqI9IYq1GKICjEoAStD6NcQK0BNONAsjui3NbMC7XF5hnmtfpXRVC9rgEkjZmxhj3EF4GhPjAbqqqpNLRl1Km5LMuC6WAggOBqOjT1KQ+msZqc6ab+xMbFYm4RVoqBQOGTt2VcjRMHRTMyjbj/mcTTrqcyskpKJsSbJK17VNjGbHdhS1i2mifvp1qvusdrc4mQjDnpkRQZevpTG12WRrQ8gYsQAoKkmuVSDmOtQbvsycbco0Q2kAYjomhvqIavATC947QyzlwkiLQ0VbyTgemjuU9oVWtMFMy2tMtAT/sozzJ2HHLa7NBhtrJO9IKj74fhjeeDXexV+6m6UxtNKgZezzJ1tNaHNsz8iXObQUB1JAz4arNLV2JKy2KHslzrWTwa4+wfEq9SnJVbYi65IzJJK0tLgAK8MyfgrRLourG1tDnVPEI2MpdN7Fol02JAcmidOTRNMiU3abwu0fmy++5Rik9pvC7R+bL77lGIe7PdUfdx9F8kBCqC0zYG4LKyxuvC1tD2jFha4BzWtacPe/eJdXXoRFXdivFYmOHhnkm9bJLdt8GZoKY2qttnmtL5LNHyUZpRtA3MChdhGTa8AodJl0JOUU2rN8PjyAhRBWzYG9LFA6RtsiDw8NDSWteG5nFVrtK1GY4JojVm4QcoxcmuFuyd2O7oMFjsrIHxSOc0uJLcOE4nOcKVNd6m/rcsv/kS9rP1VU7qGy8VkfHJAMMcuKrdcJbQkCv3SDpuoqMp55w7vQ5dPAYPFx7dJ9+73trfXT1Ngn7qlke0sfZ5XNcCCDyZBB1BGLNZtZ7Y1ltbLZgY28q0sBNXNaXAYSRqKEjqO9RCcXf8Aax+U33goym5bmvD4Gjh1Ls09VZpu6Nc2g8Jl8r4BR6fbQ+Ey+V8AmCve54lbHUR67VFekMVC6igoJDsKQ98OsLskDi4knJgpTdrQUSQKf2m0AsFNXUxGmRINa1VFVapmnDy7skOLvzT7kC5R9hlp2p+22KhtLc0xV9hF9hG/PrSEETS7iN1Bza9fFI2q0GZ1K0YD1VPDqUJbL4lie1jA0xg9IdTOjhuOmihFrdIscOL6l1tMQMeE5imfSN6hxZK0IOfaD0ppJtJRlaEngErZrxwkGlGvzI1DT0HrVFSSnO5ZClJIexWQHvhTpaT8+tN79s2KMNrTnNzOehB+ClWSghRt5gnDTQGp6h/enaqpq2wo+K7IoCgpwSUxySpSMxyK6qSSsjlSk5O73YlYtE5Ca2LRO0+QQR6ZEp45MiUCKhtN4XaPzZffcoxSe03hdo/Nl99yjE3uz3VH3cfRfJAWsXd/3bk8h/8AVVQ2G2Q/xB0g5URiPDUUxOdiroKigy1V17ob22G7o7FCx2GTml5GVGnE7E7TE47uFVOCtFy4sczHV4VK1PDx8anGT8kk/rwZCgggqzrgXRqOsLi7vQNaM1ju1fY2Xy3e61ZMtxZYGXzd0JlxxyDR5H3wMLnAHvmO+dFku1NyGxWh0Be1+ENOJop3wrQjcf7K2om3m4ZxvsitCNP2Z+OF7r9ev6kQnF3fax+U33gkWNqnViA5WPym+8FUzrt6M1baLwmXyvgFHp/tCf4mXyvgFH1Wl7nzxbARXrqJIVFkhUFdqigoFAztU2tJNQQTQHMVy7Euoa9LY4OYG5DEK8TTMhRlG6JRlZljgkNEa1OIjJHamFlnFRwKfQ2ipLSO+H+65s3c6cdEQf8AjDBJyVXFwzwtBJocx8VLPsxcKOs0udeBPNpXIJ7JY4yQS0VGjhk4cRiCWgxtzZaHak4XhrwKmpoaV9eSlbTclpwvjcr8VjYOcWy0Iyqw0p8kIwmaASHBzdNdDvrwKnZpJ3ADlWNAp3seZAINM3Gmm7ioVmzcUbnyipkkdV7uPm0Czta6lt7q9rfqStgmOEE9S5b7Ru4j4hFe4CjW7tT+qaSPqTTTROjG9X0Ka8v8bf6HCUhPoUqUhaDkV0jmsJYdE7KaWHROqoAI9MS5PHlRrzmetNIRWNpvC7R+bL77lGgVUltN4XaPzZffeo5jqIe7PdUvdx9F8kKROcw4muLSN4Ja4ecLV7TaXWvZ8yymr2tqHHUlkmFrieNMiekrJi4U+fatZuCzul2ffFEC52GQYRmSRJioBxpuU4cryZz/ALTslSm+Kkdem/8ABkSCUtEDmOLHtc0jVrgWuHWDmEmqzqAXRqOsLieXbd0toeGwxukNRkGF1KmlXEaDpKBppO7ehqvdStj7NY7PDC4saeacLsJwxsFG1G7P1LIWmpqc+k8elap3aiOTsrK51eab6BrRXtWWOIGSsq+NnJ+x0lhIvl3b89WrgxUCUu/7aPyh7wTdOLv+1j8pvvBVs6j0TNX2i8Km8r4BMKp7tGf4qbyvgFH1Wl7nzxbHaoshQqkrVM1jS5xoBqUiQ4BQVYn2xY2tI3HzgepMnbZvOYiAHSSUZWFy5PO5Q+OtagVaSWH2golxWt80PKOOZcd2QANKAJFloq5zHaF1WngTu86HoCCOt2A03HTo/lPwKlrHeQNCTmFXbxsxJLdHDf8AOqYMkdpo4Vy3OHELDUpWd0dCnWzacmqXba2OFCQQfmiWmsTHaEt6j8FmFjvyWM03cOHVx3qZs+1VNxz+SFB6cFkWy6WW7mg1JJ867ek4aMI13Kou2tBGpqBpRQ157RPc4BuprQ8GjV1OPT0hZ3ByeiLHK2rZZrTb+dhFMR1S8RyFFR4LWWHGa1Ia4k7+c8efVPhfRs01HgmKVoe3+U6PA6K5+dacPSyaGOvUz+iLaU3tJyKZ2e/bO80EgrwOSd2k80rSigLYdE5KQsPepYlJgFeox5zPWpF5UU92ZTQivbS+F2j82X33qMWw3ha7hEsglazlA52OrJu+xHFoKa1SH07Z3xGehMp5Nd0eqp4+ShFdhU2X/kyZT+y+1k9hJ5Itcw5uY4EtJ8YAGoNN4V6+nbO+Iz0JkPp2zvis9CZGS20kFTGKpFxnh6jT4yGc7Q3zJbZnTyNaC4AUAoAGigGeZ61FrWvp2zviM9CZD6ds74rPQmRk/wBkOGNyRUY4eoktu6ZKrHsltVLd5kMbGvEtKhzSaEVoQQR4xyV3+nbO+Kz0JkPp+zvis9CZChZ3TXxFVxaqxcJ4eo0+Mv8A0zq/76mtcpkmdU0oAMmgD7rW7h61FrWfp+zvis9CZD6ds74jPQmQ4X5Q4Y1wioxoVEl/oZKnN3/ax+U33gtR+nbO+Iz0JkaC27PYm4WsxYhTmTa1y9aXZ+aG8fK3uKn7QbSH+Km8r4BRtVIbSn+Km8r4BU2+9pmR1jiIL9Cdzf1Kuauzxy2LC54AqdAqHtDfDp34WfZtOX8x8YpnabbI/v3udXpNOzRNC0hSSBiE7qUJ86JJLlloUtLmCOxMGOoaHQqRFl92ItVYSw7nkdtCE6vpnJ86mJhoHU1HBw6lTNnrwMUhYfvUp1j+yv8AZ52vbhpWoz4U6lTPRlkdhmykjaYwcsnU53UeOaYWizFxwu5rxpTfTeDvTqWEQuxNNRXMV4cf1TiQNeA4HpaRq05eZVMsRXnNAOGQdTvPvUhBYXEc14I7exdmGeGQU3g/dcOIQgiw96aefLzhZqkL7GulVt4js1kZG0vkdUD5yHFQFnmL3OmdvyA4N3AJS/7Q9tOU03H7tP5TvKPs1YzK5opkM3duQUqdPLFykQrVVJ5Y7EpBCBK1koBa8BpyoRWpFCDXUetSO0lwcpEzkjV0ZLmg6uaRQsB7KKPviT+KZ0Fop51YpLaGlo4+ZO7Vmive6MvLtTmpq6NpZGswHnAaV17U924uoMPLspheaOA0DjofPQ/JVOjkwuWmNpxuUy7rNJuvaSPJr+YTv3KeDwRUGoWUTv0Kl7svyWIYWnLg7OnUoOPI7l+eoh5zKdXdbeViD8q7wNxTB7sz1oiBDbTeF2j82X33qMUntN4XaPzZffcoxJ7s91R93H0XyQFatmtiX2qI2iWRlns7a89/3qGhwgkClcqk68VVRu61pfdVk5GzWKysyjDCSOJa1rW14984+dOK0bfBnxVSanTpU3Zzb1teySu7J6XIW+9jYY4H2iz22GZjKBzTRrqnQNoTVx4UCi9k9mZLdKWMIDWCr3OzDQdMt5NDQdBUH51eO5tfMEYtFlnfyTbQzCJNMJwuaQXfdydUHTJCyuWuiI1u3o4eTjLNJbOyulzot2ldiN87IWOGKR8d4RSPjFSyjKk1phbQ8T0qM2R2Vktz3BpEcbAC97sw2taADecjvGiW2l2JtNjHKZSw7pGc5tDoXDVvXmOlS/c6vaHkbRYZ38kLQKCTQAluEtJOQ3EVyOYQks1mrFU6s44aVSlU7R9bLRc6JK9lrZ6/AZ35spY4YXyxXhHM5lOYA3ESSBRuEntoVTlZNptjbTYue4B8dcpGc5uemLeK9OXSq2k99rGvCtShmVTOnzp8NLfzqBOLv+1j8pvvBN04u/7WPym+8EmXvZmgbf3iIZ5t7nOo0f8AtGfUsmnsLDuIPEFW7ulzOdeVpFe9eAB0YGn2lVYSELZax87WwyitDozRxqNx+BT8PqMtEhNGHA9Ka2aQtOBx6ulAx1K8JnaBUJxMU3fokNoLWrQ4d8Pgp65doSKA98N249X6KuxOo7oKLPFQ5IlFPQSbRorXwTUOJzHHUAinTqmzyIO9eXMPfAnMdNBqFRY7fKzR1R05+vVSN3Xo6Q4HPbGTocPNJ4E7lS6ckWqcWXN04czCaFuRqDm3pb6kniIaK0Ldzhl6Q3FQ0EE8BrzXR0qSDiHmyyKWF5NAy13g+wgqlxLB5eErXMLXAOaRWhzpp61O3LZo2QjAMqB2etCARU796otqvAfdOfin1YT8Fa4nlkDGHvg0NPWBQ9hqozWWPqOLuyMtD8doDq051eOhqpS9ZTiGdMhTrUdA3/mh26tOj2J1fbzjb0tzqelDWyBckpaYuXsz2a1aQOg0BH/UAspkOfSPatXueQFoHEV10ppX1LN9o7NydpkbuLsQ6n874keZW4d2k4ldVaJhXSVaEYTEUATSFy7E7Mn5yV7RC5ZrivcxOdvadR1bwpX/ABNhzrqqLBNSqfcr0qDhYadyy7St/i7R+bL/AFHKKUxtOD9MtIIoeWlyOub3EZdRUS8U+dOtVPU93Rf+OPovkji1O/bEb2u+zz2fnzQjA9gIDqloxUrvq0EcQ5ZWnd3XlLA7HDI6M8WvLajgeI60J2v0ZXiaEqjjODtKDur7a6NPmz8iUtGxtsjgfaJIXNYzvsRAdTe4N1oPimlz7PWm1Ne+CMyCMgOoRXnVpQE56bkW8r/tVoAbNO94H3XO5vXhGVUldt6TWd2KGV0ZOuF5bXrGh86NBr2jI7uObjR29OppWwdktNms1q+nBzLKIjRstdTUOwtdmARlTeSFn917OWq0sdJBEXtY7C7CRWpFcmk1OXDikrzv602kATTveBoHO5teOEZVSd23vPZyTBM6MnXC4gHrGhTbWi4XoU0qFaDnUTjnm09nl009bvqaTsjZ7RZ7vtn04ObByZDGy1rUtIIa05ipLQBxpRZRxUjel+Wi005eZ0gGgc7IHiG6V6VHJSd7eRZhqEqbnOdrzabtsrK3Orb5YE4u/wC1j8pvvBN07uphMsQAqS9oAGpJIoAovY0vZjzuju/zO1/mD+mxVslWPukH/M7X+YP6bFWC9bWfPFsIvq01CQtGYr8g7k7eK/3TSlKtOiQxSKXE3gRqESiSYcLvnzJRyAQjKEtG7EEWQJKJ1CnwR5DPjST407LgUm+iLjJ3ZW1ySExO5zQ3U6jo6VIX9ZGEE4c6ZEZFc2Ns2GJz97zr0DIDtxJa+pA2NxrmB/dZp+PQuiu6R9gsDOWaxoxFjcZNQecMm+vPzKzfR/V2deXn7VWti20jdI7MvfqeDRQetzldI5GEa+sdqpreK3QspvS/Uj2WWhHDsHFR98S1l3d6FM2qdjAdK7v0qq1anlzyepJO7DgmbolzA1HAKE7odnAfG/fm09I74e0qQu2UilD2apr3QjWKI8XHtAOSnDSoiMvAymwao0I5qThK6x1GrY9yhAAzp5z8Evy6SjCNRDVwWh6xvXZiyWl2OaBr30piza4jcCWkV86Y/V9dv4VvpSfuVoQU3CO9icMVXgssZyS8m0Vf6vrt/Ct9KT9yH1fXb+Fb6Un7laEEZI9CXtuJ/Ml+5/Uq/wBX12/hW+lJ+5D6vrt/Ct9KT9ytCCMkege24n8yX7n9Sr/V9dv4VvpSfuQ+r67fwrfSk/crQgjJHoHtuJ/Ml+5/Uq/1fXb+Fb6Un7kPq+u38K30pP3K0IIyR6B7bifzJfuf1Kv9X12/hW+lJ+5O7r2Usdndjiga140cauI8kuJp5lOoIyR6Cliq81aU5Nebf1PNHdEd/mdrz/8AF9jWhV2ql+6OXC9LZw5Y09FqrXLEaj56FEqQ9NEhLGCkZiaBzT1pKO1EHNIkGnGbT5l0lElmB04rjigQdyReEcFEkTQmKt0SchKMzRL3bFjmibTV4r1DM+oIBl8scIjgawHPAB5wMzn01UDtIaROI0pTzn5KtL2mlfmldVVtrjSEjeSNNNVkjrNF70ic2U51lcBq2Q1HlAFvsPYnbZnjIVz9ag9ipyJnM3PYe1pBB9quEln9upp2qNZZZvzJUneKIWZjj3xRoYSAcsynE7TzwdWmo6j/AHBRLUBhJqQA0u5tKmmgr5/UpwpN7/3RP+bqwpVFx/d/oObvdQ6mvSktt4sVla+ubZGk9RBb7SFJXGYI4QJmuc50gBeHEOY0NaSWjQkku1yySe0zmyWWYMYQ0Av1r3rg5tcsiBQKPhqLyYbx/QzmJcxaIRJFx3LaZ7juGQI3KhNxlkjYEmgue0UEEFYQAggggAIIIIACCCCAAggggAIIIIA8yd0ME3nbK6ctl6LVWngaFS3dLtjm3rbBu5b/APLFDWa0B4o4Kpk0cGEdRTS1R0NR/un0sGSQOlDuUbkmMI9aJw4pCPvj1pVymyKO1QGq4jBqAOsKltlIsVpadzQT2834qJVk2MhFJH7y4N6gBX4qM9Exx4LTM4V3ED5oqhtpPVrQPG9gKstofnQcadG79VUtsTmzrO6izUvGi6fhZzYlgMr+ODLtFVdXNA69c9/SqDslKW2gdLXA9VP1or/aK5DdUJYhd8KPhGFvZVzTnmQ09IJ9ab4gwuxCoy10FSa1UnaYwM+Cj35mnGmu/rU41+5ke3/b/LQHT72Zf3Qb3bC8uLIwXjEMIaKkV0GXST2hTN5ZWO0sOojkBAzFWg1FfMexQ7JzG5pjJZkRzTTI7slJQuxWaZvGJ4/6d6hUd3f0HFW0M4iKRZqlYik41u5MvApGN5SmNIg1SiRI/9k="
              alt=""
            />
          </div>
        </div>
      </Theme>
    </Fragment>
  );
};

export default BlendMode;
