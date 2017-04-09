select cl.cl_id as id, ct.ct_name as name, cl.cl_date, cl.cl_time, cl.cl_seats_avail, ct.ct_description, lc.loc_name as location from classes cl
join class_types ct on cl.cl_type = ct.ct_id
join locations lc on cl.cl_location_id = lc.loc_id
where cl.cl_date > now()
limit 5;
