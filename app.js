// write code here
<script>
        function calculateTicketPrice(zone) {
            let ticketPrice;
          
            switch (zone.toUpperCase()) {
              case "A":
                ticketPrice = 1000;
                break;
              case "B":
                ticketPrice = 800;
                break;
              case "C":
                ticketPrice = 500;
                break;
              default:
                ticketPrice = "ไม่พบ Zone"; 
            }
          
            return ticketPrice;
          }
          
          let zoneInput = prompt("Enter ticket zone (A, B, or C):").toUpperCase();
          let price = calculateTicketPrice(zoneInput);
          
          if (typeof price === "number") {
            alert("Ticket Price: " + price);
          } else {
            alert(price);
          }
          
    </script>
