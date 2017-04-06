select cl.id as id, ct.name as name, cl.date, cl.time, cl.seats_avail, ct.description, lc.name as location from classes cl
join class_types ct on cl.type = ct.id
join locations lc on cl.location_id = lc.id
where cl.date > now()
limit 5
