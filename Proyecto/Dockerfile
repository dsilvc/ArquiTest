FROM ruby:2.7.6
RUN apt-get update -qq && apt-get install -y nodejs postgresql-client

WORKDIR /app

COPY Gemfile .
COPY Gemfile.lock .

RUN gem install bundler:2.2.30
RUN bundle install

COPY . /app

EXPOSE 3000

CMD ["rails", "server", "-b", "0.0.0.0"]