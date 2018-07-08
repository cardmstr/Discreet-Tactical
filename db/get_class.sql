select *
from classes
join locations on loc_id = cl_location_id
join class_types on ct_id = cl_type
where cl_id = $1;
