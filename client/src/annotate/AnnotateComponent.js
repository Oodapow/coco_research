import ReactImageAnnotate from "react-image-annotate";
import React from "react";
var testImages = [{
    src: "data:image/jpeg;base64,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",
    name: "Image 1",
    regions:[]
}, {
    src: "data:image/jpeg;base64,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",
    name: "Image 2",
    regions:[]
}, {
    src: "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/dog_cool_summer_slideshow/1800x1200_dog_cool_summer_other.jpg?resize=750px:*",
    name: "Image 3",
    regions:[]
}]
const AnnotateComponent = () => (
    <ReactImageAnnotate
        selectedImage = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUWFRgVFRUYGBgYGBgYGBgYGBgYGBgYGhgZGRgYGBgcIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDszPy40NTEBDAwMEA8QHhISGjQhISs0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQxNDQ1NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAJ8BPgMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBAIFBgEAB//EAD0QAAIBAgQEBAQFAgUCBwAAAAECEQADBBIhMQVBUWEGInGBEzKRoUJSscHRYvAUcpLh8SOCBxUWM0ODov/EABgBAAMBAQAAAAAAAAAAAAAAAAABAgME/8QAHxEBAQEBAAIDAQEBAAAAAAAAAAERAiExAxJBUXFh/9oADAMBAAIRAxEAPwDEJhKKbFWhtihOutVOk4Xw1irRLYigIIphTAqoRbEWqU+CAabuXaWDSaYN2V0rlyzNHtJAmPpXlx6TBOu0RJ/3oBb4JFJ4nStQMI7CVttETrC/UNBFIY3hNwgn4Te0NH+kml9p/Ty/xmFvya81yvYnC5TQQKKIWxBLbVCzg2NWmEwoLa1Y4myEAIqcUqXwQCebequ+girfE4nMIqtxJAowEAsUZWnnQbt2go2tQoxdSDvUA9TCljpU/gHpQbQ+AOHi7i1Zh5LQNxukr8g/1EfSvovE8eRYZU1d2KLznXUnsDP+msv4ERUw+IcGCWRCekBj+4pZ+NnMqzrDSQeZYj2Op+tTfZZq+xPFLqKEtKXcCIAEZuZd2IE9EBgc52rP3eAY+4S7YbMerva09ChAHpWw4FiEVQwCKAILzmc9kXXbqaa4px+xbULlNxzqLc7DmXM5VXueo0rVG2eowdjhl9D5wB1iTHuBFWlq6TA/4qqx/iRrrlQqKk7IAF+o39aaw9zKMx2Gpo2VeVlsXah2HRj+tAyVYcRuq9x2XbN+29KZa4uvFx0zzAgteZaLlrxFLTwCKmtcYV1TTpIsKiaMwoLCiUrHRXiK4DXaZORXiKlFeig0AK8RU4rwFGk1xuUNDJoJNM4VJq/j6+1R1zkGRdaliAQKas2hUsVY0rt59Oa+1VbtE1y1YOarSza0omGseamnUrOHMU3wThyq73iuZlKqpAHlkGTFEcxpTOFMI4G5ymCJ6g6c6jv0rn2btXc3ODO2o/4piI/eP1rP4HEjPEkddIWB71okIOzz76Vl9WmksfgrV0Q6Bp3MAEdwdwfSstxXwjEvh3zc8j6HuFPX1rbm2ee3aJobp0kE9o9O1LzPR7L7fNEQp5XUq3RhB+9CxlzywTX0LF4RG8rqGA68p6HcGshx/wAPsA1y1LoPmT8aRuY/EPSr57l8VN5ZW60CarcU801iLn0qFi2HncGi3fQkwqtmRRsNh0J1OwJoow7gskT077mV67GoW7RDArrpmIGsDc79Br7UsUlhlBJ5EbUZL4VGczJ0jSD/ABVzg8LbFzKGBV7bNmgllJzEZxyIMezCg8R4WuQBUgyQ7zorbyf6TMg9Pan+F+nPBuJmziBzz229tQaXv8NPxHdfkzMO67QJ9z9K9wPAPZZ1JhnAUrqpMEEfrM9Jqy4YVjz/AC5S7SYUBQGXN6j9Y3rP9V6AQuITOVVTDGYAnkMupblVdxjiqMDath8i6EiFzkc2OubsNhV/xW4ipkzAuyliebO5MtpsohtOflrLYjDBHyD8IhtoUnkxGgP8cqd8QT2VVsh9In3q44bxxflYSp3FVHEgMsjmarEUyPWlF1qsVwnIWuJqj6xvHPU0gRV/wbEhrLodip+tUbCsfk9r49IRXiKkBXorNoC60MUwRQWWnKVSWoOtdU0UrR6BUipKKIyVELT1OORXoogFeijQHFdrsV6KA0UU5hDFKgUxht6fx+Knv0trLVLENpQ7deua1383w5OolY2pywgFV+HOtW9lNKpKBSTU7J8xUmMyEfodPoa6xik2uHOGHIgj2pdTwcqi4s7I+ZDty3jWY1q24bx58vzH7R78hXuNcOWC6AQ3mHvBis+kLqZ0/CCVH2/asdyts2Nrh8c7kEP/APnT/ertLz88pHSNf1rLcK4jAEi2gjeWZvcmCfrVyvEUOocH0yiaq5+Jyj4lAwLAMIGkGYiq7BXCCZBkmVneeh69quMLdQkajuN6WxuDHxFZCNRqP3AqLyrXzrxzwfIf8TaXKjR8VB+ByYDAdD9iO9A8MYRXtuzEZQNZGskGI7xPuK3uOTOTbdC6uIMADQ8zOp9ugis83A0w0w4yjKGXN1zET7giekd6OblFmwmMDkvXEUqYtm5bzEHQAkLM6anflVWwQWUu29Cj5WV9xnzcvylCT9aJxrGFLtvEpoCmU9CfMrQJ0zLr08wq5w3B7d3DZ0JJL59Tq4UZCB3y5o771p49oUGMu5LiO2ZJDoJA8jcpA3GqSOhaI0iut4si4yXVaDIJBIKyAoYT3C76fatbhbaEMl0gNmCtIDIHAyMxkkrJObeCSdjMUPFvD14EMGGfNJEkjMdGZWjaVG/Ig84pU40ODdUBWfkKkEk5gUBbKQdhtp1WNOQ5t3BEkAlEZG8rHKWYKW6hkWTyn0qowPE3YAMv4SjM265QAf8AKM8RvsdOVP8AEEZbIcmW87vE6MwKHLP4SVZxuZB6VFVCWLsZ7zXRGTQKNQFb8KR2HLqelBSyxGgBZtoXMBMkQNgSBO00bD2SEBLEL5SDucxQSB+ZjyH8EjgxHlyiVUfMJlmgGczdAI2036VOrKXrKqvmyjeXbM7nsijSfoRVFiVMzlcDlKRp9avLhB12jTNrmA6jp70vjrasnk8x6kkmiWCyicNvwhEnURXBrSWDGo++tWTqAdKx7jTihxXCKJFcIrJoC1QcURqgTTAQoyUNhUkNOlEmFRiikVAilBUa9UorxFUSBFeAqUVyKA0UUSy0GuBakFpc9ZRZqxR9KOqSKr7T1ZYU118d65u+cEw+H1q3S1pQMPbFWSrpXTGCrxIAFUmLxYWauuIjQ1i+IsSSBSpxd8K4qLitYMFicyd+q/vSOMt5CQ6wDzjQ1T4BHR0cbqwYexmtucVZv3Ah8pOpQ9Y1K9jWHUbc1m7eXNo2mmh/v+asV4gQN1AHJVJ/5qPHsLbV/JCxvBGv8Vzwq6fHCORDfKTETUT203xq04LdV3Cm5JOvOMp1BHIbcq1lqynMkxsRP771R3+ApbvZ1Byn8A313jtUnt/DORGYmSQOYU7iSdY1003rRnumcYgOq5hlYHN6ESNe2vtVdxKzauH4bhSVhpzRIzDtA0Y76eYT1qzZwispEkjUhZzDvp3/AL502IsLJfOJZGDEfKwgSH3I5MD/AE+9LwTPeI8Iow7JEMXZ1zfgWSShIMKxYqB79Jp3ww4W0totDqruEOkszsQs8iFQ+8Gp8ZVsjBFOeAhk6ABSqOGI2DQCdo19aixYv2bC4llIu2brPdQmS1pwNzOhhW15ZANxFOVJS8ztnRmKP+cp5xct5UMlebKNtjBPOmvEWIu3MKl1ZzggOyTkcFMhKCdB5TtuCG0pnFX0t5MSoXI7h9NQVZQpLRqja5Ty8h2kRX4HGFv8TadcqzpbYaLdzEJJGi5iZzDdmI5igy9nhaAW8R8QgFF0A+Zl2JB6xBHaZM0/gT8W2iKCSMoAnY22EST0ztOmsiey+HuKcEok+XOkkHq+Ug88qhhp+cdNF/BeLJvEBiMxJXSYYlhtz0aenlHSg1ti74W+qEBkRSFUSCSGAd55CVCyT5cpA2FV2JW3JKNJJjKsZdQM3prOokRGp3q08TcILXQiEqiqC06+UHyZifmaToPfnNLDgCoQdYmQoMs5gRuNdxpBH7xVc1TPliAYAgaka79tedLyPaOn71ZY+woMFSG1ksDM+lJXcNAObQwN5rKtJCvlkH+zT/xgyiqa5clu1PWtxR16HPs0aianUDWDZBxQjRDUctMOZaiBR1WuMlGljqV4rXlopFBgRXCKIRUDQSEV4ipAV4igmnC1KK9NcJqNU8BTmEua0lNdV4rTjvKjrnY1WFuA1ZLqKyuBxWtafB3ZFd3Hf2jj75+tVPFgYNZf/Dy2tbbHJNZrEpDVqgo1gCrDgOCD4hbnNEYEdTy+1I4kaaUfwzi2S+pPyk5WnoajqbF81TeIUuZ3AWNdv3quwxdCvmgyCpmOfI19F8U8DZ/PaA17xXzrilt0PnWCDABrHG06fWsDifiogdjmAB2BO35huKNdtAtmgeXc8z/FZXw6WW0rszAMICkAkTz0Oo9K0Nu8OhEgZdG16z0p3pGY9ffUFGMcxvJ/Lr1E0hjRkUoASZkgBHImQGKHVp7TTlplUNt15H7npyqkxuJe9mFgZwJhmCkAgnQxr6GgC4vDH4JLnRRIKhlBXUkFDqmuXUcoHalPBvEEvlrbnMXlWXsc+cgdWViJ7co1s/D+IdkNq8ozDYn5Wn8pGgMHqI5Vh+JYa7hMaCkoc8oYnysY2/F7b8uVPwR7ilp7efBNIKs62nRc2e2QWa2QTtncQd9eg0zQuO12TM/LcKkiSktmI3JU5WG5OUDXavrfivha3bK3ssOFDo4nRygE/wCXUnv7mvmiWXS/mVczKM5CqTnZbjJuNCGUsfSCJIigL3wjgAbF20xBZWO0MJOhmd1JAbQyVXuKznC8OcPj1QbfEyiDPlnaf8pH1q+t8QFq0lxVcfEW3bZToRlchMrxuEciDvl/pqx486WMOuIVFNxgQXgbqGKHqBoB9uVL9VPQ/iHxGlthatp8S+ZLDUZARALN1gtABHzHrrmzcxzDOoVtJCyJUdFGXWO+tE4bwK+uCfF5SzXVZs8gsGzwfef1ofhXiDsfNvmKtygiP5p9bJombiqXi11yR8MF1+YSZ7xOk1XX7l9yQRl7bR61cY9MvEgF5sM0d1knT1qw49hgrKdNRpA6xy3rO39kaSf9Y9BByt9qtcMmlSGFDaxt1plLfesuuti+eQWqMUw1s0IrWTQIiuhanFdApBECula6RXRQYcVJaky1GqJ5hUCtFiuRSAQWvEUQrXCtMl+TXpqJqSCs8GpAVwrRAKlFVORrlloNX3DsVVEqVY4IV0fD1lZfJzsX0zVXxDDDem7bxXMYsrpXbK5LFTaw2aif4TKZFLWr5VoNWPxcwphZcOxTkMrHQ7CKouN8KF0HyyQ23WrfDXIgkxRrwhtWAG461j1MrTmlsBgQiIhyiNu3Y9u9P4m2APKApYSecnr2qGEuB2ImB/e9PPaHMzGnL9Ruaj0tXpbLiDIJHzRr9Jpu7Zt4a3ncqoUas2g77agk+1JYriNqzq7qIOizB0+9VGMD4q+DdcFEBYWtZGi5WK9PNz1kCnJqerkPWPEus2sNduLsT5FU67Q5DDrrypXi2JwmJZBird7CsCMtwqCp1+VnWVjc7irLxbYuYfANetL8uTWAYXMJJ7a/eqzgTjFYcrcGjIrdYkToT0NOzxv4Us9N5e4QTYVLbyAqlCfNOUysncggQT0rHcd4dchXGVH8i7GAQ2VWJHMSwG+w60v/AOHni74TPgr7E5G/6RJ1y/kHoeXc1vuJcOV55549JEbD0A+lPMJ8i8QibIkzBmPMJJEEjNqBqxidDOpmu+J/Nw1ABJlSI2AmTy9elW/GsEzLcUqJG8QJYOTJEagyDp6zsBSvilOAe0zAMikKNASsECJ7GKi3Omkm8oeFvFjf4dcKzeRCCAYkbmB/TJJ/4pvF8WsIC4ChxrIEEmI16n+KwXD8AHYAPlBAMxtyO2ogx9RWvseDrC5Xv4nNOoQfMdY3k/YVXWX9KSzzit8PYdr2IfEvoqyZYGJjyj11mKY47j8zeWCFHLUjnv8A70/xPidtE+DZXIgkQYDMdpYfvWaXztBk9R+2vKo6sxfMMWcTnUftRwtcs4cLoBFFy1y9Xy35iFQc0Q0NxUqDIroFeAqcUAJjXENdda8i0BMChsKZVag6USlUbYqRWvIKKRTpQvFcK0VlrgFKGtVNHUUqh1pu3TJICiAVxRU4o0PAVY8OE0gop7ANBqubnSO5sWTJRRbkRRLWtGFuK7uevDk6jP4rC6zR8Gg2NMY2BQcMwq5SsONZ003pIvkbz69+dWlsGp38GrDWi5RLhPAhYLgwOemsetUmIxeIxNw2rBhdpBifU1Zvw1zKgkA7knSO9aHgvB7dlPKASd2FTZIcus9wfwWM6tfZiysH7HKQd+etO+MMGMPeTGhf+my/DvEbr+Rj0HfrEwJI0uIBgMu/vPtUBjhkKXVDIQc06jLsZEfalOvIs8EF4javYc2ywKOsFTqpHMEctxINZzF4nD4SyyoQvlCqN4UaDXmYrvEPBFhmz4bFvZU/gksqgTKqZlQJOlJf+hMOsvicY10LBAUksd/LJJgkiKLn98CSsjwJQ953ZT5/keJyuHV+ZnVUI5/OR6fYfDviBMTbCr8yQW5ZdDp0nlud6qcTwjDMmS0oRAAECjzBpjMzbfl0PQk67ZjwvcGGfEuxYqbqop3OYjzMTvGv686Ou9npU5xreKwC7qAX1I5EruQewaT7ivm3iW2stK5QdRAIgnX+x3rbHHB1LciBryiOR58vWsbx+yfMBqDMdhXLe9rp54yMtwu8LbgkyvLaJPWeWn2rR38T8SJhl2BBCgRzAH/FZzBJDFWE/Y96ad4ORUPIJ+InqSOQmKvdqcyHLuADaJIJMx0H8686sMHhFRdPMe2v32qXC8NBzX3DMdSmuUdJjl61Z4jEpEK6r2VWP3Cx96nrrVczFY6NuRA7wPvtQXUfmHtJo11kO7se+Ufu1CK2/wAzfQVhWkQyr+b7VB7fv6UcWkOz/UR+lRe2V/kbUYC0V2iHX1qBWkEYrqrUlWp5KVOPCvMK7XhS0wYoiGuslQOlOeUpMtDNFBobUA6m9N2zSwFGSnCptDRKBbNMA0BJaMjRQFqc0wuMLiaf/wASIrPW3ijfHNbc/Lntl18enMSQ1LqhB0odu4Zq3w1sEVtx3rLrnBuHtO9WBIHekgsbVxXNbaywa7bzUfDYkosZZ/ivWqlciKXs4qsfxe/mCWky9yd6aw9q+VzOiydTAB166j+abw6qOh9adF+ec9hrSps9cUIjEtCqDJaTB3jUgTQeG8PDt8VmzAbRpIHID/ie9aB7dpyJt5yDIIEwexEwaZt2AFygLbHcgkd9NPrU4eqHEFpyZiNACTH0G2vzbSdTSqcOsthrq2XDvLEspDFXAAAJ/NoKY4vwc5pONKTEQi5jv9QaBwDFpbcqr33R/NAsQqZSAV0GrGe+x2qfapcZnDuAg11VZKx5pBM+0GqniuNJByoRGoYkLEaajWf9h1NfSeNeCrF/M6ZkZ5ZvmAZtdWWR1r5j4h4RdsOEOQqSVDhsyeYwMw3XUCnOOfeeT+9vi3wU8NcNa8zX3HkQNB2BJBGw3E/oaGMC+ZsoyAgw3zXTry5xH0r6PdwVuzYtWbTKiKgAZsud20zNGxJ1OlINhbdtcw3mZErqe+9T1zZT562KnhHDgASVy/1PBnuSx09KNicE0SqI4O2lxSfQSJ9aDiuIAmJKnkwMEdp6djp3FV968V1MrP8A8lvyyeQdNB9I661l1jWajetiYNtxG+Rg0e0GPc0IWkOzx2dSPuJpj/HvAzhbqbBtiOwYar6aGilVYSjSOavBI/7uX6d50rOyfi5aVayw1iR1Go+orqvyOoqSmDzRvf6GpwDuIPUbH1H8VH+GC9vmNqiUppUjQ0JhS0IKldiuiuNSphkV1RUWqa0tNJRQbq0Za7dWnKVKI1SIqBEGpiqqYdmiW2oJNdRqmGdQ0wtL2TNHFVSgoFSFRRqlRDSWpg1BalQE0NXvDmkVQirXht2K1+K+WPyTwt7iaUBRTWcEUsxrt1yjC5FLYnEmukik8bdgaad+f15UKRfH5NXYL2+Zv9PL3Ip/hfFkuci2sSxkfTQT9TWPxdsCXuNlUcjOvrGpP9I17qNaUTjrLC2wUGw2zkH00QH8q78yecW57VJvp9gS+sQT/wBo/jl7144ckz8v+X5v9Z2HpWD4PxkqcrEZlEvr5bY2Oc/m7D01OlaXDcdR4ynQmAToWIEknoANT0plZVw6ACBHrEmT9zSNjBMGlndhvGYKB7KNf0oH/m6nYyJgdzzP99aes3s1HgkuIW3KQqF+fzka8qxvG/CN/FwrsttFbQKss3ck+9bNrhGxpLFcVcKQPrVbC8qax4ds4ZFVRmK6ZnJYn67bDSs7xrHCCu3KneKcTbWT1rI8Qxecmd+vfvWffWtOIQxl3X1H+1Cw+KK6bqd1OxHOg3JJqArk6t3XTPSynIcyfK24Ovsw5jQx6dRRUP4006j8vbuKRw12NDsd/Tn+x9qZsNlP2PcVFqofUhgJ22B/Kendf0/WeTTXlpQrawSO3+4pxRK9xr7UtMJddPp/FBdaORXrg59f150rQVy1xhRitDcUGWapWzXri0O22tICsaINRQyKktAAvLQ1ambgmk2FVKinq6K8KKoowaPhzTkaUjaMU8h0qg8pogNBoiUjGQ10morUjQHVNNYZ4NKLRbdXxfKO54Xa4rSk8RjwOdKYi4QKocRfaTrXZOnNeVzd4vGk1BuKDLmPt/Pr0+vSs0xJOp03PoNTS+JvMYHv9dvoIFP7F9R+I4wu0k7bDkP7+9RS2yEKv/vvrJMfCQiZnk5GpP4V7nSGDETcYAi3EKdQztOWewgk9csc6FedgpMy9ySzHfLOon+ozPp3rPq/q+Z+DLiAYs22i2vmd4+cqDmcjoBOVf3NW6YtlQRIa5oi81tA6D1dtSf6f6qpcBh5CpzusAT0RW/dhP8A9Y61a23zOX2AByD8oAyoPby1je61nK44fiTmidEEep5n/UfpFbPh9/SsBgNDWrwN/Sr+PrUfJyvrt+qfHXxUsRiNKpMZiK31jip4w+9Zl0JNX+Med6rnUVNXKRe3pSlwVaOKRxCVj3I24oNs1YJsp7foSP0iq+0KsrS6D3rm6bQ7Z2B9v7+tNJ1/uKXtL5Z/q/amrQqbTRdKgdvemrg0H0pdhQAiKiRUmFDJoAV5dKAia0y1RUUG7lqJFSLVyiFQ2pa4tNPQitOFX//Z"
        taskDescription="# Draw region around each animal."
        images={testImages}
        regionClsList={["Dog", "Cat"]}
    />
)
export default AnnotateComponent;