package co.com.sofka.mentoring35.controllers;

import java.util.Collections;
import java.util.Date;
import java.util.stream.Collectors;
import java.util.stream.IntStream;
import java.util.stream.Stream;

import co.com.sofka.mentoring35.collections.Random;
import co.com.sofka.mentoring35.repositories.RandomRepository;
import co.com.sofka.mentoring35.models.RequestDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(value = "/ramdom")
public class RandomController {

    private final RandomRepository randomRepository;

    @Autowired
    public RandomController(RandomRepository randomRepository) {
        this.randomRepository = randomRepository;
    }

    @PostMapping("")
    public Mono<Random> post(@RequestBody RequestDTO request) {
        return Mono.just(new Random()).map(entity -> {
            entity.setDate(new Date());
            entity.setOrginalList(request.getList());
            return entity;
        }).map(entity -> {
            var list = Stream.of(request.getList().split(","))
                .map(String::trim)
                .collect(Collectors.toList());
            Collections.shuffle(list);
            var randomList = String.join(",", list);
            entity.setRandomList(randomList);
            return entity;
        }).flatMap(randomRepository::save);
    }

    @PostMapping("/number")
    public Mono<Random> forNumber(@RequestBody RequestDTO request) {
        return Mono.just(new Random()).map(entity -> {
            entity.setDate(new Date());
            entity.setOrginalList(IntStream.range(request.getNumber1(), request.getNumber2() + 1)
                    .mapToObj(String::valueOf)
                    .collect(Collectors.joining(",")));
            return entity;
        }).map(entity -> {
            var list = Stream.of(entity.getOrginalList().split(","))
                    .collect(Collectors.toList());
            Collections.shuffle(list);
            var randomList = String.join(",", list);
            entity.setRandomList(randomList);
            return entity;
        }).flatMap(randomRepository::save);
    }

    @GetMapping("")
    public Flux<Random> get() {
        return randomRepository.findAll();
    }
}
