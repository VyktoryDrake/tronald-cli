#!/usr/bin/env node

/*
<!#CR>
************************************************************************************************************************
*                                                    Copyrights ©                                                      *
* -------------------------------------------------------------------------------------------------------------------- *
*          Authors Names    > Vyktory Drake                                                                            *
*          Authors Email    > vyktorydrake@tuta.io                                                                     *
* -------------------------------------------------------------------------------------------------------------------- *
*                                            File and License Information                                              *
* -------------------------------------------------------------------------------------------------------------------- *
*          File Name        > <!#FN> tronald.js </#FN>                                                                 *
*          File Birth       > <!#FB> 2020/10/17 22:53:36.986 </#FB>                                                    *
*          File Mod         > <!#FT> 2020/10/18 07:54:53.507 </#FT>                                                    *
*          License          > <!#LT> GPL-3.0-or-later </#LT>                                                           *
*                             <!#LU> https://spdx.org/licenses/GPL-3.0-or-later.html </#LU>                            *
*                             <!#LD> This file may not be redistributed in whole or significant part. </#LD>           *
*          File Version     > <!#FV> 1.0.1 </#FV>                                                                      *
*                                                                                                                      *
******************************************* VSCode Extension: Version Boss *********************************************
</#CR>
*/
//Obligatory dependencies.
const axios = require("axios");
const chalk = require("chalk");
//Clear the console before we get going!
console.clear()

function about() {
    //About me
    const me = chalk.blueBright("This cheeky bit of fun was made by Vyktory Drake.")
    const gh = chalk.blueBright("You can find their Github at https://github.com/VyktoryDrake.")
    //About the APIs
    const api = chalk.redBright("Thanks to the Tronald Dump API at https://www.tronalddump.io/")
    const tut = chalk.redBright("Also thanks to the tutorial at https://www.section.io/engineering-education/create-a-nodejs-cli/ for helping me re-learn stuff.")
    //Seriously y'all need to do this...
    const rtv = chalk.whiteBright(chalk.bgBlueBright(`Seriously though, register to vote if you're in the United States. Your vote matters and decides the future of billions.`))
    const etv = chalk.whiteBright(chalk.bgRedBright(`Find more non-partisan info at https://www.vote.org/. The developer believes in co-operation from all, for the benefit of all.`))
    //Oh boy lots of logging...
    console.log(`${me}`)
    console.log(`${gh}`)
    console.log(`${api}`)
    console.log(`${tut}`)
    console.log(`${rtv}`)
    console.log(`${etv}`)
    //This is before we start searching.
    console.log(chalk.whiteBright(`Trawling through the tweet dump...`));
}

function getQuote() {
    //Make sure people know it's not hung.
    //Axios init GET
    axios({
            method: "get",
            url: "https://api.tronalddump.io/random/quote",
        })
        //Convert and display dump
        .then((res) => {
            const quote = chalk.yellow(res.data.value);
            const tronald = chalk.cyan("Donald J. Trump (@realdonaldtrump)");
            console.log(`${quote} - ${tronald}`);
        })
        //Catch errs.
        .catch((err) => {
            const log = chalk.red(err);
            console.log(log);
        });
}
//Yargs was bad so I made this instead.
about()
//May as well have a cool easter egg, plus the wait allows reading and some verisimilitude.
setTimeout(getQuote, 2016)