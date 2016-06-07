get '/muppets' do
  @muppets = Muppet.all
  erb :"muppets/_index", layout: false
end

get '/muppets/new' do
  @muppet = Muppet.new
  erb :"muppets/_new", layout: false
end

get '/muppets/:id' do
  @muppet = Muppet.find(params[:id])
  if request.xhr?
    erb :"muppets/_show", layout: false
  else
    erb :"muppets/_show", layout: false
  end
end

post '/muppets' do
  # params = {muppet: {name: "Jen", description: "nice"}}
  @muppet = Muppet.new(params[:muppet])

  if @muppet.save
    @muppets = Muppet.all
    erb :"muppets/_index", layout: false
  else
    erb :"muppets/_new", layout: false
  end
end

get '/muppets/:id/edit' do
  @muppet = Muppet.find(params[:id])
  erb :"muppets/_edit", layout: false
end

put '/muppets/:id' do
  @muppet = Muppet.find(params[:id])

  if @muppet.update_attributes(params[:muppet])
    @muppets = Muppet.all
    erb :"muppets/_index", layout: false
  else
    erb :"muppets/_edit", layout: false
  end
end

delete '/muppets/:id' do
  Muppet.destroy(params[:id])
  @muppets = Muppet.all
    erb :"muppets/_index", layout: false
end
