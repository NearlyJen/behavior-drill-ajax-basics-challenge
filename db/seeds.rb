require 'csv'

CSV.foreach('db/muppets.csv', headers: true, header_converters: :symbol) do |row|
  Muppet.create!(row.to_hash)
end