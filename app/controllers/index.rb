# Release 0
get '/' do
  erb :"basics/release_0"
end

get '/basic_request' do
  "I'm the body of the response from a GET request."
end

post '/basic_request' do
  "I'm the body of the response from a POST request. #{params[:name]} is #{params[:age]} years old and #{params[:description]}."
end

# Release 1
get '/release_1' do
  erb :"basics/release_1"
end

get '/display_info' do
  @message = "I'm the body of the response from a GET request using a partial."
  erb :"basics/_release_1_a", layout: false
end

post '/display_info' do
  @message = "I'm the body of the response from a POST request using a partial. #{params[:name]} is #{params[:age]} years old and #{params[:description]}."
  erb :"basics/_release_1_b", layout: false
end

# Release 2
get '/release_2' do
  erb :"basics/release_2"
end

get '/using_json' do
  {message: "I'm the body of the response from a GET request using json."}.to_json
end

post '/using_json' do
  {message: "I'm the body of the response from a POST request using json. #{params[:name]} is #{params[:age]} years old and #{params[:description]}."}.to_json
end

# Release 3
get '/release_3' do
  erb :"basics/release_3"
end

# Release 4
get '/release_4' do
  erb :"basics/release_4"
end



