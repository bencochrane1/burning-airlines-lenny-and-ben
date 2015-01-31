plane1 = Plane.create(name: "747", rows: 26, aisles: 6)
plane2 = Plane.create(name: "756", rows: 28, aisles: 8)
plane3 = Plane.create(name: "767", rows: 29, aisles: 9)
plane4 = Plane.create(name: "789", rows: 22, aisles: 6)
plane5 = Plane.create(name: "348", rows: 24, aisles: 4)


Flight.create(flight_number: "JQ123", origin:"SYD", destination:"LA", date: 2014, plane_id:plane1.id)
Flight.create(flight_number: "FQ123", origin:"LA", destination:"BUL", date: 2014, plane_id:plane2.id)
Flight.create(flight_number: "KQ123", origin:"HK", destination:"SIN", date: 2014, plane_id:plane3.id)
Flight.create(flight_number: "TQ123", origin:"LON", destination:"CHINA", date: 2014, plane_id:plane4.id)
Flight.create(flight_number: "TQ123", origin:"LON", destination:"CHINA", date: 2014, plane_id:plane5.id)