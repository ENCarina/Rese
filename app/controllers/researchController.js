/*
* File: researchController.js
* Author: Nagy Etelka
* Copyright: 2025, Nagy Etelka
* Group: Szoft II-E
* Date: 2025-10-21
* Github: https://github.com/ENCarina
* License: MIT
*/

const ResearchController = {
    index:(req, res) =>{
        res.json({
            crud: "read",
            name: "Nagy Etelka, II-E, 2025-10-21",
            success: true
        })
    },
    store:(req, res) =>{
        res.json({
            crud: "create",
            name: "Nagy Etelka, II-E, 2025-10-21",
            success: true
        })
    },
    update:(req, res) =>{
        res.json({
            crud: "update",
            name: "Nagy Etelka, II-E, 2025-10-21",
            success: true
        })
    },
    destroy:(req, res) =>{
        res.json({
            crud: "delete",
            name: "Nagy Etelka, II-E, 2025-10-21",
            success: true
        })
    },
}
export default ResearchController