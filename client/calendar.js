/* Leonardo Moreira Kobe    NºUSP: 9778623
Rafael Tavares Oliveira          NºUSP: 11219071
Eduardo Souza Rocha           NºUSP: 11218692 */

/**
 * Location is the HTML tag where the calendar will be rendered
 */
export default class Calendar {
   constructor(location) {
      this.location = location
      this.location.innerHTML = ''
      this.now = new Date()
      this.location.append(this.createCalendar())
   }

   /**
    * Create a Calendar table
    */
   createCalendar() {
      const start = new Date(this.now.getFullYear(), this.now.getMonth(), 1)
      const end = new Date(this.now.getFullYear(), this.now.getMonth() + 1, 0)

      const { table, tbody } = newTable()

      let day = 1

      // First Week
      let tr = newTR()
      for (let i = 0; i < 6; i++) {
         if (i < start.getDay()) tr.appendChild(newTD('*'))
         else tr.appendChild(newTD(day++))
      }
      tr.appendChild(newTD(day++, true))
      tbody.appendChild(tr)

      // Other Weeks
      while (day <= end.getDate() - 7) {
         let tr = newTR()
         for (let i = 0; i < 6; i++) {
            tr.appendChild(newTD(day++))
         }
         tr.appendChild(newTD(day++, true))
         tbody.appendChild(tr)

      }

      // Last Week
      tr = newTR()
      for (let i = 0; i < 6; i++) {
         if (day <= end.getDate()) tr.appendChild(newTD(day++))
         else tr.appendChild(newTD('*'))
      }
      if (day <= end.getDate()) tr.appendChild(newTD(day++), true)
      else tr.appendChild(newTD('*'))
      tbody.appendChild(tr)

      return table
   }
}

function newTable() {
   let table = document.createElement('table')
   let tbody = document.createElement('tbody')
   table.appendChild(tbody)
   
   return { table: table, tbody: tbody }
}

function newTD(day, sunday = false) {
   let td = document.createElement('td')
   td.innerText = day
   if (sunday) td.className = 'sunday'
   return td
}

function newTR() {
   return document.createElement('tr')
}