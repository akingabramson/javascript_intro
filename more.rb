class Array
  def my_each(&blk)
    for i in self do
      blk.call(i)
    end
  end
end