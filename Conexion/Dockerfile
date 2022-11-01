FROM ruby:2.7.6

WORKDIR /conexion

RUN gem install mqtt
RUN gem install pg

COPY . /conexion

CMD ["ruby", "conexion.rb"]