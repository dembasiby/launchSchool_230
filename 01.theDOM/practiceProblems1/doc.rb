def fullStack?(student) 
  backend = !!(student[:knowsRuby] and 
              student[:knowsSQL]) 
  frontend = !!(student[:knowsHTML] and 
                student[:knowsCSS] and 
                student[:knowsJavaScript]) 
  backend and frontend 
end 

alice = { 
  name: 'Alice', 
  knowsRuby: true, 
  knowsSQL: false, 
  knowsHTML: true, 
  knowsCSS: true, 
  knowsJavaScript: false
} 
    
bob = { 
  name: 'Bob', 
  knowsRuby: true, 
  knowsSQL: true, 
  knowsHTML: true, 
  knowsCSS: true, 
  knowsJavaScript: true
} 

applicants = [alice, bob]
# recommendations = [] 

recommendation = '' 
applicants.each do |applicant| 
  recommendation = 'Invited!' 
  if fullStack?(applicant)  
    puts "#{applicant[:name]}: #{recommendation}" 
  else
    puts "#{applicant[:name]}: Not recommended"
  end
end